#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Cores para o terminal
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logError(message) {
  log(`❌ ${message}`, "red");
}

function logSuccess(message) {
  log(`✅ ${message}`, "green");
}

function logInfo(message) {
  log(`ℹ️  ${message}`, "blue");
}

function logWarning(message) {
  log(`⚠️  ${message}`, "yellow");
}

// Categorias disponíveis
const categories = [
  { id: "eventos", name: "Eventos" },
  { id: "atividades", name: "Atividades" },
  { id: "infraestrutura", name: "Infraestrutura" },
];

// Função para ler o arquivo de dados da galeria
function readGalleryData() {
  const filePath = path.join(process.cwd(), "app", "data", "gallery.ts");
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    logError("Erro ao ler o arquivo gallery.ts");
    return null;
  }
}

// Função para extrair o próximo ID disponível
function getNextId(content) {
  const idMatch = content.match(/id:\s*(\d+)/g);
  if (!idMatch) return 1;

  const ids = idMatch.map((match) => parseInt(match.match(/\d+/)[0]));
  return Math.max(...ids) + 1;
}

// Função para adicionar nova imagem ao arquivo
function addImageToGallery(imageData) {
  const filePath = path.join(process.cwd(), "app", "data", "gallery.ts");
  const content = readGalleryData();

  if (!content) return false;

  const nextId = getNextId(content);

  // Criar o objeto da nova imagem
  const newImage = `  {
    id: ${nextId},
    src: "/images/gallery/${imageData.category}/${imageData.filename}",
    alt: "${imageData.alt}",
    category: "${imageData.category}",
    title: "${imageData.title}",
    description: "${imageData.description}",
    width: ${imageData.width || 800},
    height: ${imageData.height || 600}
  },`;

  // Encontrar onde inserir a nova imagem (antes do fechamento do array)
  const insertIndex = content.lastIndexOf("];");
  if (insertIndex === -1) {
    logError("Não foi possível encontrar onde inserir a nova imagem");
    return false;
  }

  const newContent =
    content.slice(0, insertIndex) +
    newImage +
    "\n" +
    content.slice(insertIndex);

  try {
    fs.writeFileSync(filePath, newContent, "utf8");
    logSuccess(`Imagem adicionada com ID ${nextId}`);
    return true;
  } catch (error) {
    logError("Erro ao salvar o arquivo gallery.ts");
    return false;
  }
}

// Função principal
function main() {
  log("📸 Adicionar Nova Imagem à Galeria", "bright");
  log("=====================================\n", "cyan");

  // Verificar se foi passado um arquivo como argumento
  const args = process.argv.slice(2);
  if (args.length === 0) {
    logError("Uso: node add-gallery-image.js <arquivo-imagem>");
    logInfo("Exemplo: node add-gallery-image.js minha-foto.jpg");
    process.exit(1);
  }

  const imageFile = args[0];

  // Verificar se o arquivo existe
  if (!fs.existsSync(imageFile)) {
    logError(`Arquivo não encontrado: ${imageFile}`);
    process.exit(1);
  }

  // Obter informações do arquivo
  const filename = path.basename(imageFile);
  const ext = path.extname(filename).toLowerCase();

  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
    logError("Formato de arquivo não suportado. Use JPG, PNG ou WebP.");
    process.exit(1);
  }

  logInfo(`Arquivo: ${filename}`);

  // Solicitar informações da imagem
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) =>
    new Promise((resolve) => rl.question(query, resolve));

  (async () => {
    try {
      // Categoria
      log("\n📁 Categorias disponíveis:", "bright");
      categories.forEach((cat, index) => {
        log(`${index + 1}. ${cat.name}`, "cyan");
      });

      const categoryChoice = await question("\nEscolha a categoria (1-3): ");
      const categoryIndex = parseInt(categoryChoice) - 1;

      if (categoryIndex < 0 || categoryIndex >= categories.length) {
        logError("Categoria inválida");
        rl.close();
        return;
      }

      const category = categories[categoryIndex];

      // Título
      const title = await question("Título da imagem: ");
      if (!title.trim()) {
        logError("Título é obrigatório");
        rl.close();
        return;
      }

      // Descrição
      const description = await question("Descrição da imagem: ");
      if (!description.trim()) {
        logError("Descrição é obrigatória");
        rl.close();
        return;
      }

      // Alt text
      const alt = await question("Texto alternativo (para acessibilidade): ");
      if (!alt.trim()) {
        logError("Texto alternativo é obrigatório");
        rl.close();
        return;
      }

      // Dimensões
      const width = (await question("Largura (padrão: 800): ")) || "800";
      const height = (await question("Altura (padrão: 600): ")) || "600";

      rl.close();

      // Preparar dados da imagem
      const imageData = {
        filename,
        category: category.id,
        title: title.trim(),
        description: description.trim(),
        alt: alt.trim(),
        width: parseInt(width),
        height: parseInt(height),
      };

      // Copiar arquivo para a pasta correta
      const targetDir = path.join(
        process.cwd(),
        "public",
        "images",
        "gallery",
        category.id
      );
      const targetPath = path.join(targetDir, filename);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      fs.copyFileSync(imageFile, targetPath);
      logSuccess(`Arquivo copiado para: ${targetPath}`);

      // Adicionar ao arquivo de dados
      if (addImageToGallery(imageData)) {
        logSuccess("Imagem adicionada com sucesso!");
        logInfo('Execute "npm run dev" para ver as mudanças.');
      } else {
        logError("Falha ao adicionar imagem ao arquivo de dados");
      }
    } catch (error) {
      logError("Erro durante o processo: " + error.message);
      rl.close();
    }
  })();
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { addImageToGallery, getNextId };
