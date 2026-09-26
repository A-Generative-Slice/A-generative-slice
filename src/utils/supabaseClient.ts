import { createClient, SupabaseClient } from '@supabase/supabase-js';

const getEnv = (key: string): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const local = localStorage.getItem(key);
        if (local) return local;
    }
    return (import.meta as any).env?.[key] || '';
};

let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
    const url = getEnv('VITE_SUPABASE_URL');
    const anonKey = getEnv('VITE_SUPABASE_ANON_KEY');

    if (!url || !anonKey) {
        return null;
    }
    if (!clientInstance) {
        try {
            clientInstance = createClient(url, anonKey);
        } catch (err) {
            console.warn('Supabase initialization failed:', err);
            return null;
        }
    }
    return clientInstance;
};

export const saveSupabaseCredentials = (url: string, anonKey: string): boolean => {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('VITE_SUPABASE_URL', url.trim());
        localStorage.setItem('VITE_SUPABASE_ANON_KEY', anonKey.trim());
        clientInstance = null;
        return true;
    }
    return false;
};

/**
 * Uploads a file (resume PDF or project brief) to a Supabase storage bucket.
 * Bucket name defaults to 'resumes-and-briefs'.
 */
export const uploadAttachmentToSupabase = async (
    file: File,
    bucketName: string = 'resumes-and-briefs'
): Promise<{ success: boolean; url?: string; error?: string }> => {
    const supabase = getSupabaseClient();
    if (!supabase) {
        // Fallback gracefully to object URL preview
        const localUrl = URL.createObjectURL(file);
        return { success: true, url: localUrl };
    }

    try {
        const timestamp = Date.now();
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `${timestamp}_${cleanName}`;

        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.warn('Supabase upload warning, using local preview:', error.message);
            return { success: true, url: URL.createObjectURL(file) };
        }

        const { data: publicUrlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(data.path);

        return { success: true, url: publicUrlData.publicUrl };
    } catch (err: any) {
        console.warn('Storage upload error, using local fallback:', err);
        return { success: true, url: URL.createObjectURL(file) };
    }
};

/**
 * Inserts a client project inquiry into Supabase 'project_inquiries' table.
 */
export const insertProjectInquiry = async (inquiry: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    category?: string;
    budget?: string;
    message: string;
    attachmentUrl?: string;
}): Promise<{ success: boolean; error?: string }> => {
    // 1. Always record in local storage backup
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const existing = JSON.parse(localStorage.getItem('ags_supabase_inquiries') || '[]');
            existing.push({
                ...inquiry,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('ags_supabase_inquiries', JSON.stringify(existing));
        }
    } catch (e) {
        console.warn('Local storage inquiry backup warning:', e);
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
        // Safe success: lead is captured in local storage
        return { success: true };
    }

    try {
        const { error } = await supabase.from('project_inquiries').insert([
            {
                full_name: inquiry.name,
                email: inquiry.email,
                phone: inquiry.phone || null,
                company: inquiry.company || null,
                category: inquiry.category || 'General',
                budget_range: inquiry.budget || null,
                message: inquiry.message,
                attachment_url: inquiry.attachmentUrl || null,
                created_at: new Date().toISOString()
            }
        ]);

        if (error) {
            console.warn('Supabase inquiry insert warning:', error.message);
        }
        return { success: true };
    } catch (err: any) {
        console.warn('Supabase inquiry network warning:', err?.message);
        return { success: true };
    }
};

/**
 * Inserts a career application into Supabase 'career_applications' table.
 */
export const insertCareerApplication = async (application: {
    name: string;
    email: string;
    phone?: string;
    role?: string;
    portfolioUrl?: string;
    resumeUrl?: string;
    notes?: string;
}): Promise<{ success: boolean; error?: string }> => {
    // 1. Always record in local storage backup
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const existing = JSON.parse(localStorage.getItem('ags_supabase_applications') || '[]');
            existing.push({
                ...application,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('ags_supabase_applications', JSON.stringify(existing));
        }
    } catch (e) {
        console.warn('Local storage application backup warning:', e);
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
        return { success: true };
    }

    try {
        const { error } = await supabase.from('career_applications').insert([
            {
                full_name: application.name,
                email: application.email,
                phone: application.phone || null,
                role: application.role || 'General',
                portfolio_url: application.portfolioUrl || null,
                resume_url: application.resumeUrl || null,
                cover_notes: application.notes || null,
                status: 'new',
                created_at: new Date().toISOString()
            }
        ]);

        if (error) {
            console.warn('Supabase career application insert warning:', error.message);
        }
        return { success: true };
    } catch (err: any) {
        console.warn('Supabase career application network warning:', err?.message);
        return { success: true };
    }
};
