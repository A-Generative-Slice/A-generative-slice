import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
    if (!supabaseUrl || !supabaseAnonKey) {
        return null;
    }
    if (!clientInstance) {
        clientInstance = createClient(supabaseUrl, supabaseAnonKey);
    }
    return clientInstance;
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
        return { success: false, error: 'Supabase credentials not configured in environment variables.' };
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
            return { success: false, error: error.message };
        }

        const { data: publicUrlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(data.path);

        return { success: true, url: publicUrlData.publicUrl };
    } catch (err: any) {
        return { success: false, error: err?.message || 'Storage upload failed' };
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
    const supabase = getSupabaseClient();
    if (!supabase) {
        return { success: false, error: 'Supabase credentials not configured.' };
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
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (err: any) {
        return { success: false, error: err?.message || 'Failed to insert inquiry' };
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
    const supabase = getSupabaseClient();
    if (!supabase) {
        return { success: false, error: 'Supabase credentials not configured.' };
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
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (err: any) {
        return { success: false, error: err?.message || 'Failed to submit career application' };
    }
};
