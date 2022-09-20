# Passo a Passo #

Git & Github 

## Comandos ##

// Clonar ou baixar um repósitorio //

git clone (url-do-repositório)

// Verificar o repositorio atual 

git remote -v

// Verifica as branches existentes e mostra a branch atual 

git branch

// Cria uma branch nova e alterna automaticamente (pra a nova)

git checkout -b (nome da branch)

// Alterna para a branch especificada 

git checkout (nome da branch)

// Add arquivo para staging 

git add (nome do arquivo)
ou
git add .   (para todos os arquivos modificados)

// Verifica o status dos arquivos do projeto

git status

// Cria um ponto de acesso para as alterações e possui uma mensagem descrevendo essas alterações

git commit -m ("mensagem")

// Comando de atalho para git add e git commit! Nao adiciona arquivos novos, apenas as açoes realizadas em arquivos existentes e realiza o commit.

git commit -am ('mensagem alteração')

// Traz as alterações que estão remotas na branch atual

git pull

// Traz as alterações que estão remotas na branch especificada para a branch atual

git pull origin (nome da branch)

// Deixa a branch acessivel remotamente e envia as alterações realizadas 

git push -u (nome da branch)

// Envia as alterações realizadas na branch atual *quando a branch já está remota 

git push

// Mostra os registros dos commits

git log

// 