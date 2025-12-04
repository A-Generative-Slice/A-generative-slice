from PIL import Image
import sys

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if pixel is close to white
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            newData.append((255, 255, 255, 0))  # Transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    input_file = "/home/smdhussain/.gemini/antigravity/brain/3966fc3a-55b0-481c-be5a-215698097b50/white_missile_transparent_1764796025783.png"
    output_file = "/home/smdhussain/Desktop/projects/A-generative-slice-main/images/white-missile-transparent-final.png"
    remove_background(input_file, output_file)
