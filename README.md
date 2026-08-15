# Pizza Amigo Website

Leichtgewichtige, responsive Website auf Basis der bereitgestellten Speisekarten-PDF.

## Lokal ansehen

Im Projektordner starten:

```bash
python3 -m http.server 8000
```

Dann `http://localhost:8000` öffnen.

## Bestelllinks ergänzen

In `index.html` bei den beiden Elementen mit der Klasse `pending-link` das jeweilige `href="#"` durch den Uber-Eats- bzw. Lieferando-Link ersetzen und die Klasse `pending-link` entfernen.

## Eröffnungsangebot

Das Popup kündigt das Eröffnungsangebot bereits vor dem Aktionsstart an. Das Angebot gilt vom 20.08.2026 bis einschließlich 20.09.2026. Ab dem 21.09.2026 bleibt das Popup automatisch aus. Innerhalb einer Browser-Sitzung erscheint es höchstens einmal.

Für eine manuelle Vorschau außerhalb des Aktionszeitraums kann die Seite mit `?offer=1` geöffnet werden.
