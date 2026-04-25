import urllib.request
import re
import os

# Create assets folder if not exists
if not os.path.exists('assets'):
    os.makedirs('assets')

try:
    # Rappi
    req = urllib.request.Request('https://www.urbannutrition.ec/logo-rappi/', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'img[^>]+src=["\']([^"\']+logo-rappi[^"\']+)["\']', html)
    if match:
        url = match.group(1)
        print("Downloading Rappi from:", url)
        urllib.request.urlretrieve(url, 'assets/logo_rappi_local.png')
    else:
        print("Rappi logo not found")

    # DIAN
    req = urllib.request.Request('https://www.vectorlogo.es/logos/logo-vector-dian-colombia/', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'img[^>]+src=["\']([^"\']+dian[^"\']+\.(png|svg|jpg))["\']', html, re.IGNORECASE)
    if match:
        url = match.group(1)
        print("Downloading DIAN from:", url)
        urllib.request.urlretrieve(url, 'assets/logo_dian_local.png')
    else:
        print("DIAN logo not found")
except Exception as e:
    print(e)
