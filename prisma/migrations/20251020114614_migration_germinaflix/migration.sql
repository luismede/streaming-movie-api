-- CreateTable
CREATE TABLE "filme" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ano" TIMESTAMP(3) NOT NULL,
    "imagem" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritado" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idFilme" INTEGER NOT NULL,
    "tipo" VARCHAR(50) NOT NULL DEFAULT 'favorito',
    "nota" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favoritado" ADD CONSTRAINT "favoritado_idFilme_fkey" FOREIGN KEY ("idFilme") REFERENCES "filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritado" ADD CONSTRAINT "favoritado_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
