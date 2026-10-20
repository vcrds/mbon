<p align="center">
  <img src="./docs/mbn.gif" width="720" alt="Prévia do site do Ministério Boas Novas">
</p>

<h1 align="center">Ministério Boas Novas</h1>

<p align="center">
  Site institucional da igreja em Curitiba — programação, discipulado, galeria e como chegar.
</p>

<p align="center">
  <a href="https://ministerioboasnovas.com.br">ministerioboasnovas.com.br</a>
</p>

O Ministério Boas Novas é uma igreja cristã em Curitiba. Este repositório é o site público: uma página única com a programação da semana, o curso **Cada Homem Um Guerreiro**, a galeria de fotos, a localização e as redes sociais. Também há uma página dedicada ao curso de discipulado para homens.

## O que o site apresenta

- **Início** — abertura com a identidade da igreja
- **Programação semanal** — horários dos encontros
- **Cada Homem Um Guerreiro** — apresentação da série EMAW e página em [`/cada-homem-um-guerreiro`](app/cada-homem-um-guerreiro/page.tsx), com os livros, a jornada e contato por WhatsApp
- **Galeria** — fotos de eventos, atividades e do espaço
- **Localização** — endereço e link para o mapa
- **Redes sociais** — Instagram configurado por variável de ambiente

O visual é escuro, com tipografia Montserrat, e o site funciona como PWA (instalável no celular).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) e React 19
- TypeScript
- Tailwind CSS 4
- [react-icons](https://react-icons.github.io/react-icons/)

## Como rodar

Requisitos: Node.js e npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento (Turbopack) |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build localmente |
| `npm run lint` | ESLint |
| `npm run add-image` | Adiciona uma foto na galeria (`scripts/add-gallery-image.js`) |

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. As variáveis são públicas (`NEXT_PUBLIC_*`) e entram no bundle do cliente.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_INSTAGRAM_USERNAME` | Usuário do Instagram (sem `@`) |
| `NEXT_PUBLIC_WARRIOR_COURSE_WHATSAPP_NUMBER` | Número do WhatsApp do curso, só dígitos, com DDI |
| `NEXT_PUBLIC_WARRIOR_COURSE_WHATSAPP_DISPLAY` | Número formatado para exibição |

## Estrutura

```
app/
├── page.tsx                         # Página inicial
├── cada-homem-um-guerreiro/         # Página do curso
├── components/                      # Seções e UI compartilhada
└── data/                            # Textos, galeria e redes sociais
public/
├── images/gallery/                  # Fotos publicadas
└── videos/                          # Vídeos das seções
docs/                                # Notas de galeria, metadados e redes
scripts/add-gallery-image.js         # Inclusão de imagens na galeria
```

Conteúdo editável (textos do curso, lista da galeria, redes) fica em `app/data/`. Fotos novas entram em `public/images/gallery/`; o passo a passo está em [`docs/GALERIA.md`](docs/GALERIA.md).

## Documentação interna

- [`docs/GALERIA.md`](docs/GALERIA.md) — como adicionar e organizar fotos
- [`docs/REDES_SOCIAIS.md`](docs/REDES_SOCIAIS.md) — Instagram e demais redes
- [`docs/METADADOS.md`](docs/METADADOS.md) — SEO, Open Graph e PWA
- [`docs/EXEMPLO_USO.md`](docs/EXEMPLO_USO.md) — Analytics e dados estruturados
