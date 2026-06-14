# Página rápida para cuidador de adultos mayores

Esta carpeta contiene una página estática lista para publicar como landing page de anuncios.

## 1. Qué debes editar antes de publicar

Abre `index.html` y cambia:

- `TU-USUARIO.github.io/cuidador-gdl/` por la URL real cuando la tengas.
- Si tu papá tiene nombre profesional, título, cédula, certificación o referencias, agrégalo en la sección de confianza.
- Si no es enfermero titulado, usa siempre “cuidador” o “acompañante hospitalario” y evita prometer actos de enfermería.
- Cambia los horarios si no puede contestar de 7:00 a 22:00.

El WhatsApp ya está configurado para el número: `+52 331 205 8311`.

## 2. Probar la página en tu Mac mini

1. Copia esta carpeta a tu Mac mini.
2. Abre Terminal.
3. Entra a la carpeta:

```bash
cd ruta/a/cuidador-gdl
```

4. Ejecuta:

```bash
python3 -m http.server 8080
```

5. Abre en Safari o Chrome:

```text
http://localhost:8080
```

## 3. Publicarla gratis con GitHub Pages, recomendado para anuncios

1. Crea una cuenta o entra a GitHub.
2. Crea un repositorio público llamado `cuidador-gdl`.
3. Sube todos los archivos de esta carpeta.
4. Ve a `Settings` > `Pages`.
5. En `Build and deployment`, elige `Deploy from a branch`.
6. Elige `main` y `/root`, después guarda.
7. Espera unos minutos. La URL se verá similar a:

```text
https://TU-USUARIO.github.io/cuidador-gdl/
```

Usa esa URL como destino de Google Ads y Meta Ads.

## 4. Opción con Mac mini + Cloudflare Quick Tunnel, solo para pruebas

No la recomiendo para anuncios pagados, porque si la Mac se reinicia o se cae Internet, el anuncio quedará apuntando a una página caída. Además, el subdominio de Quick Tunnel puede cambiar.

Para probar:

```bash
brew install cloudflared
python3 -m http.server 8080
```

En otra ventana de Terminal:

```bash
cloudflared tunnel --url http://localhost:8080
```

Copia la URL `https://....trycloudflare.com` que te entregue Cloudflare.

## 5. Anuncios y medición

Para Google Ads, usa esta página como destino y agrega un “call asset” con el teléfono.
Para Meta/Facebook/Instagram, usa campañas con destino WhatsApp o usa esta página como landing page.

Los textos sugeridos están en `ad-copy.md`.
