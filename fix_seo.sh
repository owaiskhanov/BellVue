#!/bin/bash

# Update index.html
sed -i 's/<title>Bellevue Mumbai | Multispeciality Hospital/<title>Bellevue Multispeciality Hospital/g' index.html
sed -i 's/content="Bellevue Mumbai is a premier multispecialty hospital/content="Bellevue Multispeciality Hospital is a premier hospital/g' index.html
sed -i 's/content="Bellevue Mumbai, Bellevue Hospital Mumbai/content="Bellevue Multispeciality Hospital, Bellevue Hospital Mumbai/g' index.html
sed -i 's/content="Bellevue Mumbai"/content="Bellevue Multispeciality Hospital"/g' index.html
sed -i 's/content="Bellevue Mumbai | Multispeciality Hospital"/content="Bellevue Multispeciality Hospital"/g' index.html
sed -i 's/content="Bellevue Mumbai:/content="Bellevue Multispeciality Hospital:/g' index.html

# Update SEO.tsx
sed -i 's/const siteName = "Bellevue Mumbai"/const siteName = "Bellevue Multispeciality Hospital"/g' src/components/SEO.tsx
sed -i 's/title.includes("Bellevue Mumbai")/title.includes("Bellevue Multispeciality Hospital")/g' src/components/SEO.tsx
sed -i 's/ | Multispeciality Hospital//g' src/components/SEO.tsx

# Update pages
sed -i 's/Bellevue Mumbai/Bellevue Multispeciality Hospital/g' src/pages/*.tsx
