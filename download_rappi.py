import urllib.request
import re

try:
    req = urllib.request.Request('https://www.urbannutrition.ec/logo-rappi/', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|svg))["\']', html)
    for m in matches:
        if 'rappi' in m.lower():
            print("Found:", m)
            urllib.request.urlretrieve(m, 'assets/logo_rappi_local.png')
            break
except Exception as e:
    print(e)
