from PIL import Image
from pathlib import Path

FILES = [
    "06EC33C3-F198-4AAE-B81F-82C443774CBA.png",
    "3CEBF8B6-F49A-4A77-A24B-70BD73E4A043.png",
    "878FAAD7-22B3-4BD5-8FB7-E3B40CDA2DC6.png",
    "8FB870B3-7D81-4E99-88EB-CFE7AAEDEBE4.png",
    "DE23ECB8-645B-4269-B3DB-F4461A5006BD.png",
]

def dhash(path: str, size: int = 16) -> str:
    image = Image.open(path).convert("L").resize((size + 1, size))
    pixels = list(image.getdata())
    bits = []
    width = size + 1
    for y in range(size):
        row = pixels[y * width:(y + 1) * width]
        bits.extend(row[x + 1] > row[x] for x in range(size))
    value = 0
    for bit in bits:
        value = (value << 1) | int(bit)
    return f"{value:0{size * size // 4}x}"

for path in FILES:
    with Image.open(path) as image:
        print(f"ASSET {Path(path).name} {image.width}x{image.height} DHASH={dhash(path)}")
