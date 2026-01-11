import zipfile
import re
import xml.etree.ElementTree as ET
import sys
import os

def extract_text_from_pptx(pptx_path):
    text_content = []
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            # Find slide files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            # Sort slides (slide1, slide2, ...)
            slides.sort(key=lambda x: int(re.search(r'slide(\d+)', x).group(1)))

            for slide in slides:
                xml_content = z.read(slide)
                tree = ET.fromstring(xml_content)
                
                # Check for all text under a:t tags
                # Namespaces are annoying in ElementTree if exact, but we can iterate all elements
                slide_text = []
                for elem in tree.iter():
                    if elem.tag.endswith('}t'): # matches <a:t> regardless of namespace
                        if elem.text:
                            slide_text.append(elem.text)
                
                if slide_text:
                    slide_num = re.search(r'slide(\d+)', slide).group(1)
                    text_content.append(f"--- Slide {slide_num} ---")
                    text_content.append(" ".join(slide_text))
                    text_content.append("\n")

    except Exception as e:
        return f"Error reading {pptx_path}: {str(e)}"

    return "\n".join(text_content)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 extract_pptx.py <filename>")
        sys.exit(1)
    
    path = sys.argv[1]
    if not os.path.exists(path):
        print(f"File not found: {path}")
    else:
        print(extract_text_from_pptx(path))
