# -*- coding: utf-8 -*-
import re
import os

with open(r"C:\Users\USER\.gemini\antigravity\scratch\interactive_survey\src\lib\questions.ts", "r", encoding="utf-8") as f:
    content = f.read()

outcomes_match = re.search(r'const OUTCOMES = \[\s*(.*?)\s*\];\s*export function calculateResult', content, re.DOTALL)
if outcomes_match:
    outcomes_str = outcomes_match.group(1)
    
    blocks = re.findall(r'\{\s*min: (-?\d+),\s*max: (-?\d+),\s*image: "(.*?)",\s*name: \{\s*zh: "(.*?)".*?desc: \{\s*zh: "(.*?)"', outcomes_str, re.DOTALL)
    
    md_content = "# 水母圖片與文案審核區\n\n您可以從這裡預覽所有 20 種水母的名稱、圖片以及文案描述。如果您想修改任何文案，可以直接告訴我，或複製修改後貼給我！\n\n"
    
    for i, block in enumerate(blocks):
        min_score, max_score, image_path, name_zh, desc_zh = block
        desc_zh = desc_zh.replace('\\n', '\n> ')
        
        img_name = image_path.split('/')[-1]
        abs_img_path = f"file:///C:/Users/USER/.gemini/antigravity/scratch/interactive_survey/public/images/{img_name}"
        
        md_content += f"## {i+1}. {name_zh} (分數區間: {min_score} ~ {max_score})\n\n"
        md_content += f"![{name_zh}]({abs_img_path})\n\n"
        md_content += f"> **文案內容：**\n> {desc_zh}\n\n"
        md_content += "---\n\n"
        
    with open(r"C:\Users\USER\.gemini\antigravity\brain\b979607c-3651-40b0-91bf-877d5657a970\questions_review.md", "w", encoding="utf-8") as f:
        f.write(md_content)
        
    print("Review Artifact Created!")
else:
    print("Could not find OUTCOMES block")
