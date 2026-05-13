# -*- coding: utf-8 -*-
import sys
import re

# Update CSS
with open('src/app/page.module.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('#dad4c6', '#050505')
content = content.replace('#4a453f', '#ffffff')
content = content.replace('rgba(74, 69, 63, 0.2)', 'rgba(255, 255, 255, 0.2)')
content = content.replace('rgba(74, 69, 63, 0.05)', 'rgba(255, 255, 255, 0.05)')

with open('src/app/page.module.css', 'w', encoding='utf-8') as f:
    f.write(content)

# Update Questions
with open('src/lib/questions.ts', 'r', encoding='utf-8') as f:
    q_content = f.read()

q_content = re.sub(r'【.*?】\n', '', q_content)

with open('src/lib/questions.ts', 'w', encoding='utf-8') as f:
    f.write(q_content)

print('Updated CSS and Questions')
