import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Comprar {

    carrinho = window.localStorage.getItem("carrinho") != '' ? parseInt(window.localStorage.getItem("carrinho")) : 0;

    constructor(private toastCtrl: ToastController) {

    }

    adicionarCarrinho(id_servico: number, descricao: string, preco: number, mensagem = true) {

        try {
            this.carrinho += 1;
            window.localStorage.setItem("carrinho", this.carrinho.toString())
            window.localStorage.setItem(this.carrinho.toString(), JSON.stringify({ id_servico, descricao, preco }));

            if (mensagem) {
                this.toastCtrl.create({
                    message: 'Serviço adicionado no carrinho',
                    duration: 2000
                }).present();
            }
        } catch (error) {

        }

        return this.carrinho;
    }

    consultarQtdeCarrinho() {
        return parseInt(window.localStorage.getItem("carrinho"));
    }

    excluirItemCarrinho(servicos) {
        if (this.carrinho > 0) {

            const promises = [];

            for (let i = 1; i < this.carrinho + 1; i++) {
                const promise = window.localStorage.removeItem(i.toString());
            }

            Promise.all(promises).then(() => {
                this.carrinho = 0;

                if (servicos.length > 0) {
                    servicos.forEach(s => {
                        this.adicionarCarrinho(s.id_servico, s.servico, s.valor, false);
                    });
                } else {
                    window.localStorage.setItem("carrinho", this.carrinho.toString());
                }
            });
        }
    }

    limparCarrinho() {
        if (this.carrinho > 0) {
            const promises = [];

            for (let i = 1; i < this.carrinho + 1; i++) {
                const promise = window.localStorage.removeItem(i.toString());
            }

            Promise.all(promises).then(() => {
                this.carrinho = 0;
                window.localStorage.setItem("carrinho", this.carrinho.toString());
            });
        }
    }

    buscarItensCarrinho() {
        this.carrinho = this.consultarQtdeCarrinho();

        if (this.carrinho > 0) {
            let resp = { total: 0.00, itens: [] }

            for (let i = 1; i <= this.carrinho; i++) {
                let s = JSON.parse(window.localStorage.getItem(i.toString()));

                resp.itens.push(
                    {
                        pessoa: window.localStorage.getItem("usuario"),
                        index: i - 1,
                        id_servico: parseInt(s.id_servico),
                        servico: s.descricao,
                        valor: parseFloat(s.preco),
                        data_agendamento: '',
                        hora_agendamento: ''
                    }
                );

                resp.total += parseFloat(s.preco);
            }

            return resp;
        } else {
            return null
        }
    }

}