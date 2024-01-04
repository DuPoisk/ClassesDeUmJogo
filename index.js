//node index.js para iniciar a aplicação
const readline = require('readline');

class Heroi {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.tipo = '';
    }

    cadastrarHeroi() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question("Digite o nome do herói: ", (nome) => {
                this.nome = nome;

                rl.question("Digite a idade do herói: ", (idade) => {
                    this.idade = parseInt(idade);

                    rl.question("Escolha o tipo de herói (guerreiro, mago, monge, ninja): ", (tipo) => {
                        this.tipo = tipo.toLowerCase();
                        rl.close();
                        resolve();
                    });
                });
            });
        });
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

async function jogar() {
    const heroi = new Heroi();
    await heroi.cadastrarHeroi();
    heroi.atacar();
}

// Iniciar o jogo
jogar();
