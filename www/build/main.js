webpackJsonp([7],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoricoPage = /** @class */ (function () {
    function HistoricoPage(navCtrl, navParams, serviceAgenda, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceAgenda = serviceAgenda;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.servicos = null;
        //now = new Date();
        this.dataDe = "";
        this.dataAte = "";
    }
    HistoricoPage.prototype.pesquisar = function () {
        if ((this.dataDe == '') || (this.dataAte == '')) {
            this.toastCtrl.create({
                message: 'Informe uma data inicial e final para pesquisar',
                duration: 2000
            }).present();
            return;
        }
        this.carregarServicos(this.dataDe, this.dataAte);
    };
    HistoricoPage.prototype.carregarServicos = function (dtinicial, dtfinal) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            spinner: 'bubbles'
        });
        loader.present();
        this.serviceAgenda.buscar(null, dtinicial, dtfinal).then(function (resp) {
            loader.dismiss();
            if (resp.json().length > 0) {
                _this.servicos = resp.json();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                    title: "Atenção!",
                    text: "Não tem histórico de serviços!",
                    timer: 2000,
                    icon: "info"
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
        }).catch(function () {
            loader.dismiss();
        });
    };
    HistoricoPage.prototype.ionViewWillEnter = function () {
        this.servicos = [];
    };
    HistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-historico',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\historico\historico.html"*/'<ion-header>\n  <ion-toolbar align-title="center" color="primary">\n    <ion-title>\n      Histórico\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>De</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="dataDe" cancelText="Cancelar" doneText="Confirmar">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ate</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="dataAte" cancelText="Cancelar" doneText="Confirmar">\n      </ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block round icon-start (click)="pesquisar()">\n      <ion-icon name="search"></ion-icon>\n      Pesquisar\n    </button>\n  </div>\n\n  <div *ngIf="servicos!=null">\n    <ion-card *ngFor="let s of servicos">\n      <ion-list>\n        <ion-item>\n          <h2 text-justify style="color: #2F2D81"><strong>{{s.data_agendamento}} as {{s.hora_agendamento}}</strong></h2>\n          <ion-badge *ngIf="s.realizado" item-end color="danger">Realizado</ion-badge>\n          <ion-badge *ngIf="!s.realizado" item-end color="confirmado">Aberto</ion-badge>\n          <p text-justify>Serviço: {{s.servico}}</p>\n          <p text-justify>{{s.valor | currency:"BRL":true:"1.2"}}</p>\n\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\historico\historico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__["a" /* AgendaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], HistoricoPage);
    return HistoricoPage;
}());

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agendamento_agendamento__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgendadosPage = /** @class */ (function () {
    function AgendadosPage(navCtrl, navParams, serviceAgenda, modalCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceAgenda = serviceAgenda;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.servicos = null;
    }
    AgendadosPage.prototype.carregarServicos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            spinner: 'bubbles'
        });
        loader.present();
        this.serviceAgenda.buscar(false).then(function (resp) {
            loader.dismiss();
            if (resp.json().length > 0) {
                _this.servicos = resp.json();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                    title: "Atenção!",
                    text: "Não tem serviços de agendamento em aberto!",
                    timer: 2000,
                    icon: "info"
                });
            }
        });
    };
    AgendadosPage.prototype.ionViewWillEnter = function () {
        this.carregarServicos();
    };
    AgendadosPage.prototype.mensagemExpirado = function () {
        this.toastCtrl.create({
            message: 'Limite para remarcar excedido',
            duration: 2000
        }).present();
    };
    AgendadosPage.prototype.remarcar = function (servico) {
        var _this = this;
        if (servico.confirmado) {
            return __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                title: "Atenção!",
                text: "Agendamentos confirmados não é permitido fazer o reagendamento!",
                timer: 2000,
                icon: "warning"
            });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__agendamento_agendamento__["a" /* AgendamentoPage */], { item: servico });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.servicos[parseInt(data.index) - 1].data_agendamento = data.data_agendada;
                _this.servicos[parseInt(data.index) - 1].hora_agendamento = data.hora_agendada;
                _this.serviceAgenda.remarcar(_this.servicos[parseInt(data.index) - 1]).then(function () {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                        title: "Salvo!",
                        text: "Remarcado com sucesso!",
                        timer: 2000,
                        icon: "success"
                    });
                    _this.carregarServicos();
                }).catch(function (resp) {
                    console.log(resp);
                });
            }
        });
    };
    AgendadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-agendados',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\agendados\agendados.html"*/'<ion-header>\n  <ion-toolbar align-title="center" color="primary">\n    <ion-title>\n      Agendados\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="servicos!=null">\n    <ion-card *ngFor="let s of servicos">\n      <ion-list>\n        <ion-item-sliding>\n        <ion-item>\n          <h2 text-justify style="color: #2F2D81"><strong>{{s.data_agendamento}} as {{s.hora_agendamento}}</strong></h2>\n          <ion-badge *ngIf="!s.confirmado" item-end color="danger">Confirmar</ion-badge>\n          <ion-badge *ngIf="s.confirmado" item-end color="confirmado">Confirmado</ion-badge>\n          <p text-justify>Serviço: {{s.servico}}</p>\n          <p text-justify>{{s.valor | currency:"BRL":true:"1.2"}}</p>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="primary" (click)="remarcar(s)">\n            <ion-icon name="md-time" style="zoom:1.5;"></ion-icon>\n            Remarcar\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n      </ion-list>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\agendados\agendados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__["a" /* AgendaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__["a" /* AgendaProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], AgendadosPage);
    return AgendadosPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=agendados.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaServicosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lista_servicos_lista_servicos__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__funcoes_comprar__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaServicosPage = /** @class */ (function () {
    function ListaServicosPage(navCtrl, navParams, loadingCtrl, comprar, serviceServico) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.comprar = comprar;
        this.serviceServico = serviceServico;
        this.carrinho = 0;
        this.titulo = "";
        this.id_categoria = 0;
        this.listaServicos = null;
    }
    ListaServicosPage.prototype.ionViewWillEnter = function () {
        this.carrinho = this.comprar.consultarQtdeCarrinho();
    };
    ListaServicosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.id_categoria = parseInt(this.navParams.get('id_categoria'));
        if (this.id_categoria > 0) {
            var loader_1 = this.loadingCtrl.create({
                content: "Carregando...",
                spinner: 'bubbles'
            });
            loader_1.present();
            this.serviceServico.buscar(this.id_categoria).then(function (result) {
                _this.listaServicos = [];
                loader_1.dismiss();
                if (result.json().length == 0) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                        title: "Não Encontrado!",
                        text: "Nenhum serviço para essa categoria",
                        timer: 2000,
                        icon: "info"
                    });
                    return _this.navCtrl.pop();
                }
                else {
                    _this.listaServicos = result.json();
                }
            }).catch(function (e) {
                var erro = JSON.parse(e._body);
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Erro ao carregar!", erro.Retorno, "error");
                loader_1.dismiss();
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("", "Categoria não habilitada no momento", "error", {
                buttons: [false],
                timer: 2000,
            }).then(function () {
                _this.navCtrl.pop();
            });
        }
    };
    ListaServicosPage.prototype.verCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ListaServicosPage.prototype.addCarrinho = function (servico) {
        this.carrinho = this.comprar.adicionarCarrinho(servico.id, servico.servico, servico.valor);
    };
    ListaServicosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-lista-servicos',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\lista-servicos\lista-servicos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{titulo}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="verCarrinho()">\n        <ion-icon name="cart" style="position:relative; right:9px">\n          <ion-badge *ngIf="carrinho>0"\n            style="position: absolute; font-weight: bold; top:-10px; left:15px; font-size: 9px;" color="danger">\n            {{carrinho}}\n          </ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-badge item-end color="verde">Filtrar</ion-badge>\n  <ion-badge item-end color="verde">Ordenar</ion-badge>\n\n  <ion-list *ngFor="let s of listaServicos">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src={{s.foto_url}}>\n      </ion-thumbnail>\n      <h2>{{s.servico}}</h2>\n      <p>{{s.valor | currency:"BRL":true:"1.2"}}</p>\n        <button ion-button clear item-end icon-only (click)="addCarrinho(s)">\n          <ion-icon name="cart" color="marromClaro"></ion-icon>\n        </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\lista-servicos\lista-servicos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__funcoes_comprar__["a" /* Comprar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__funcoes_comprar__["a" /* Comprar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__providers_lista_servicos_lista_servicos__["a" /* ListaServicosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_lista_servicos_lista_servicos__["a" /* ListaServicosProvider */]) === "function" && _e || Object])
    ], ListaServicosPage);
    return ListaServicosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lista-servicos.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__funcoes_comprar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, serviceLogin, comprar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceLogin = serviceLogin;
        this.comprar = comprar;
        this.usuario = "";
        this.senha = "";
    }
    LoginPage.prototype.novoUsuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    LoginPage.prototype.entrar = function () {
        var _this = this;
        if ((this.usuario != '') && (this.senha != '')) {
            this.serviceLogin.login(this.usuario, this.senha).then(function (resp) {
                window.localStorage.setItem("usuario", resp.json().id_usuario);
                _this.comprar.limparCarrinho();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (er) {
                if (er.status == 401) {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                        title: "Não Encontrado",
                        text: "Usuário ou senha inválido",
                        icon: "error",
                    }).then(function () {
                    });
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\login\login.html"*/'<ion-content text-center id="login">\n  <ion-grid class="logo login">\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/imgs/logo_login.png" style="max-width: 65px;">\n      </ion-col>\n    </ion-row>\n\n    <br><br><br>\n\n    <form class="login-form" (ngSubmit)="entrar()">\n      <ion-row>\n        <ion-col>\n          <ion-item padding style="background-color:transparent">\n            <ion-label>\n              <ion-icon name="contact"></ion-icon>\n            </ion-label>\n            <ion-input type="text" placeholder="Usuário" [(ngModel)]="usuario" name="usuario" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item padding style="background-color:transparent">\n            <ion-label>\n              <ion-icon name="key"></ion-icon>\n            </ion-label>\n            <ion-input type="password" placeholder="Senha" [(ngModel)]="senha" name="senha" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col padding>\n          <button type="submit" ion-button color="primary" full>Entrar</button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <br><br><br><br>\n    <button ion-button clear color="light" (click)="novoUsuario()">\n      Cadastrar-se\n    </button>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__funcoes_comprar__["a" /* Comprar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__funcoes_comprar__["a" /* Comprar */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendados/agendados.module": [
		821,
		6
	],
	"../pages/agendamento/agendamento.module": [
		822,
		5
	],
	"../pages/cadastro/cadastro.module": [
		823,
		0
	],
	"../pages/carrinho/carrinho.module": [
		824,
		4
	],
	"../pages/historico/historico.module": [
		825,
		3
	],
	"../pages/lista-servicos/lista-servicos.module": [
		826,
		2
	],
	"../pages/login/login.module": [
		827,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 309;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaServicosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaServicosProvider = /** @class */ (function () {
    function ListaServicosProvider(http) {
        this.http = http;
        this.headersBase = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.url = __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__["a" /* _urlBase */] + 'servicos/';
        this.headersBase.append('Content-Type', 'application/json');
        this.headersBase.append('Accept', 'application/json');
    }
    ListaServicosProvider.prototype.buscar = function (id_categoria) {
        this.headersBase.set('idcategoria', id_categoria);
        return this.http.get(this.url, { headers: this.headersBase }).toPromise();
    };
    ListaServicosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ListaServicosProvider);
    return ListaServicosProvider;
}());

//# sourceMappingURL=lista-servicos.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
        this.headersBase = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.url = __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__["a" /* _urlBase */] + 'login/';
        this.headersBase.append('Content-Type', 'application/json');
        this.headersBase.append('Accept', 'application/json');
    }
    LoginProvider.prototype.login = function (usuario, senha) {
        this.headersBase.set('usuario', usuario);
        this.headersBase.set('senha', senha);
        return this.http.get(this.url, { headers: this.headersBase }).toPromise();
    };
    LoginProvider.prototype.novoUsuario = function (dados) {
        var jsonObj = JSON.stringify(dados);
        return this.http.post(this.url, jsonObj, { headers: this.headersBase }).toPromise();
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LoginProvider);
    return LoginProvider;
    var _a;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historico_historico__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agendados_agendados__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__agendados_agendados__["a" /* AgendadosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__historico_historico__["a" /* HistoricoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Agendar" tabIcon="md-create"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agendados" tabIcon="md-time"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Histórico" tabIcon="md-paper"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_servicos_lista_servicos__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__funcoes_comprar__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, comprar) {
        this.navCtrl = navCtrl;
        this.comprar = comprar;
        this.carrinho = 0;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.carrinho = this.comprar.consultarQtdeCarrinho();
    };
    HomePage.prototype.verCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    HomePage.prototype.abrirServicos = function (id_categoria) {
        if (id_categoria === void 0) { id_categoria = 0; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_servicos_lista_servicos__["a" /* ListaServicosPage */], { id_categoria: id_categoria });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar align-title="center" color="primary">\n    <ion-title>\n      Agendar\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="verCarrinho()">\n        <ion-icon name="cart" style="position:relative; right:9px">\n          <ion-badge *ngIf="carrinho>0"\n            style="position: absolute; font-weight: bold; top:-10px; left:15px; font-size: 9px;" color="danger">\n            {{carrinho}}\n          </ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <ion-slides pager="true">\n    <ion-slide>\n      <ion-col col-6 class="box-item" (click)="abrirServicos(1)">\n        <img src="../../assets/imgs/1.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(2)">\n        <img src="../../assets/imgs/2.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(3)">\n        <img src="../../assets/imgs/3.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(4)">\n        <img src="../../assets/imgs/4.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(5)">\n        <img src="../../assets/imgs/10.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(6)">\n        <img src="../../assets/imgs/5.png">\n      </ion-col>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-col col-6 class="box-item" (click)="abrirServicos(7)">\n        <img src="../../assets/imgs/6.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(8)">\n        <img src="../../assets/imgs/7.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(9)">\n        <img src="../../assets/imgs/8.png">\n      </ion-col>\n\n      <ion-col col-6 class="box-item" (click)="abrirServicos(10)">\n        <img src="../../assets/imgs/9.png">\n      </ion-col>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__funcoes_comprar__["a" /* Comprar */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_historico_historico__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_agendados_agendados__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_agendamento_agendamento__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lista_servicos_lista_servicos__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_lista_servicos_lista_servicos__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__funcoes_comprar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_login_login__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_servicos_lista_servicos__["a" /* ListaServicosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_agendados_agendados__["a" /* AgendadosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agendados/agendados.module#AgendadosPageModule', name: 'AgendadosPage', segment: 'agendados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/agendamento.module#AgendamentoPageModule', name: 'AgendamentoPage', segment: 'agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historico/historico.module#HistoricoPageModule', name: 'HistoricoPage', segment: 'historico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-servicos/lista-servicos.module#ListaServicosPageModule', name: 'ListaServicosPage', segment: 'lista-servicos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_2__pages_agendados_agendados__["a" /* AgendadosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_servicos_lista_servicos__["a" /* ListaServicosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__["a" /* CadastroPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__providers_lista_servicos_lista_servicos__["a" /* ListaServicosProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__["a" /* AgendaProvider */],
                __WEBPACK_IMPORTED_MODULE_18__funcoes_comprar__["a" /* Comprar */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_login_login__["a" /* LoginProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comprar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Comprar = /** @class */ (function () {
    function Comprar(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.carrinho = window.localStorage.getItem("carrinho") != '' ? parseInt(window.localStorage.getItem("carrinho")) : 0;
    }
    Comprar.prototype.adicionarCarrinho = function (id_servico, descricao, preco, mensagem) {
        if (mensagem === void 0) { mensagem = true; }
        try {
            this.carrinho += 1;
            window.localStorage.setItem("carrinho", this.carrinho.toString());
            window.localStorage.setItem(this.carrinho.toString(), JSON.stringify({ id_servico: id_servico, descricao: descricao, preco: preco }));
            if (mensagem) {
                this.toastCtrl.create({
                    message: 'Serviço adicionado no carrinho',
                    duration: 2000
                }).present();
            }
        }
        catch (error) {
        }
        return this.carrinho;
    };
    Comprar.prototype.consultarQtdeCarrinho = function () {
        return parseInt(window.localStorage.getItem("carrinho"));
    };
    Comprar.prototype.excluirItemCarrinho = function (servicos) {
        var _this = this;
        if (this.carrinho > 0) {
            var promises = [];
            for (var i = 1; i < this.carrinho + 1; i++) {
                var promise = window.localStorage.removeItem(i.toString());
            }
            Promise.all(promises).then(function () {
                _this.carrinho = 0;
                if (servicos.length > 0) {
                    servicos.forEach(function (s) {
                        _this.adicionarCarrinho(s.id_servico, s.servico, s.valor, false);
                    });
                }
                else {
                    window.localStorage.setItem("carrinho", _this.carrinho.toString());
                }
            });
        }
    };
    Comprar.prototype.limparCarrinho = function () {
        var _this = this;
        if (this.carrinho > 0) {
            var promises = [];
            for (var i = 1; i < this.carrinho + 1; i++) {
                var promise = window.localStorage.removeItem(i.toString());
            }
            Promise.all(promises).then(function () {
                _this.carrinho = 0;
                window.localStorage.setItem("carrinho", _this.carrinho.toString());
            });
        }
    };
    Comprar.prototype.buscarItensCarrinho = function () {
        this.carrinho = this.consultarQtdeCarrinho();
        if (this.carrinho > 0) {
            var resp = { total: 0.00, itens: [] };
            for (var i = 1; i <= this.carrinho; i++) {
                var s = JSON.parse(window.localStorage.getItem(i.toString()));
                resp.itens.push({
                    pessoa: window.localStorage.getItem("usuario"),
                    index: i - 1,
                    id_servico: parseInt(s.id_servico),
                    servico: s.descricao,
                    valor: parseFloat(s.preco),
                    data_agendamento: '',
                    hora_agendamento: ''
                });
                resp.total += parseFloat(s.preco);
            }
            return resp;
        }
        else {
            return null;
        }
    };
    Comprar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], Comprar);
    return Comprar;
}());

//# sourceMappingURL=comprar.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendaProvider = /** @class */ (function () {
    function AgendaProvider(http) {
        this.http = http;
        this.headersBase = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.url = __WEBPACK_IMPORTED_MODULE_1__conexaoService_urlbase__["a" /* _urlBase */] + 'agendas/';
        this.headersBase.append('Content-Type', 'application/json');
        this.headersBase.append('Accept', 'application/json');
    }
    AgendaProvider.prototype.incluir = function (agendamento) {
        var jsonObj = JSON.stringify(agendamento);
        return this.http.post(this.url, jsonObj, { headers: this.headersBase }).toPromise();
    };
    AgendaProvider.prototype.buscar = function (realizado, dtInicial, dtFinal) {
        if (realizado === void 0) { realizado = null; }
        if (dtInicial === void 0) { dtInicial = ''; }
        if (dtFinal === void 0) { dtFinal = ''; }
        var usuario = window.localStorage.getItem("usuario");
        if (realizado != null) {
            this.headersBase.append('realizado', realizado == false ? 'false' : 'true');
        }
        if ((dtInicial != '') || (dtFinal != '')) {
            this.headersBase.delete('dtinicial');
            this.headersBase.delete('dtfinal');
            this.headersBase.append('dtinicial', dtInicial);
            this.headersBase.append('dtfinal', dtFinal);
        }
        return this.http.get(this.url + usuario, { headers: this.headersBase }).toPromise();
    };
    AgendaProvider.prototype.remarcar = function (agenda) {
        var jsonObj = JSON.stringify(agenda);
        return this.http.put(this.url + 'remarcar/', jsonObj, { headers: this.headersBase }).toPromise();
    };
    AgendaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AgendaProvider);
    return AgendaProvider;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 352,
	"./af.js": 352,
	"./ar": 353,
	"./ar-dz": 354,
	"./ar-dz.js": 354,
	"./ar-kw": 355,
	"./ar-kw.js": 355,
	"./ar-ly": 356,
	"./ar-ly.js": 356,
	"./ar-ma": 357,
	"./ar-ma.js": 357,
	"./ar-sa": 358,
	"./ar-sa.js": 358,
	"./ar-tn": 359,
	"./ar-tn.js": 359,
	"./ar.js": 353,
	"./az": 360,
	"./az.js": 360,
	"./be": 361,
	"./be.js": 361,
	"./bg": 362,
	"./bg.js": 362,
	"./bm": 363,
	"./bm.js": 363,
	"./bn": 364,
	"./bn.js": 364,
	"./bo": 365,
	"./bo.js": 365,
	"./br": 366,
	"./br.js": 366,
	"./bs": 367,
	"./bs.js": 367,
	"./ca": 368,
	"./ca.js": 368,
	"./cs": 369,
	"./cs.js": 369,
	"./cv": 370,
	"./cv.js": 370,
	"./cy": 371,
	"./cy.js": 371,
	"./da": 372,
	"./da.js": 372,
	"./de": 373,
	"./de-at": 374,
	"./de-at.js": 374,
	"./de-ch": 375,
	"./de-ch.js": 375,
	"./de.js": 373,
	"./dv": 376,
	"./dv.js": 376,
	"./el": 377,
	"./el.js": 377,
	"./en-au": 378,
	"./en-au.js": 378,
	"./en-ca": 379,
	"./en-ca.js": 379,
	"./en-gb": 380,
	"./en-gb.js": 380,
	"./en-ie": 381,
	"./en-ie.js": 381,
	"./en-il": 382,
	"./en-il.js": 382,
	"./en-in": 383,
	"./en-in.js": 383,
	"./en-nz": 384,
	"./en-nz.js": 384,
	"./en-sg": 385,
	"./en-sg.js": 385,
	"./eo": 386,
	"./eo.js": 386,
	"./es": 387,
	"./es-do": 388,
	"./es-do.js": 388,
	"./es-us": 389,
	"./es-us.js": 389,
	"./es.js": 387,
	"./et": 390,
	"./et.js": 390,
	"./eu": 391,
	"./eu.js": 391,
	"./fa": 392,
	"./fa.js": 392,
	"./fi": 393,
	"./fi.js": 393,
	"./fil": 394,
	"./fil.js": 394,
	"./fo": 395,
	"./fo.js": 395,
	"./fr": 396,
	"./fr-ca": 397,
	"./fr-ca.js": 397,
	"./fr-ch": 398,
	"./fr-ch.js": 398,
	"./fr.js": 396,
	"./fy": 399,
	"./fy.js": 399,
	"./ga": 400,
	"./ga.js": 400,
	"./gd": 401,
	"./gd.js": 401,
	"./gl": 402,
	"./gl.js": 402,
	"./gom-deva": 403,
	"./gom-deva.js": 403,
	"./gom-latn": 404,
	"./gom-latn.js": 404,
	"./gu": 405,
	"./gu.js": 405,
	"./he": 406,
	"./he.js": 406,
	"./hi": 407,
	"./hi.js": 407,
	"./hr": 408,
	"./hr.js": 408,
	"./hu": 409,
	"./hu.js": 409,
	"./hy-am": 410,
	"./hy-am.js": 410,
	"./id": 411,
	"./id.js": 411,
	"./is": 412,
	"./is.js": 412,
	"./it": 413,
	"./it-ch": 414,
	"./it-ch.js": 414,
	"./it.js": 413,
	"./ja": 415,
	"./ja.js": 415,
	"./jv": 416,
	"./jv.js": 416,
	"./ka": 417,
	"./ka.js": 417,
	"./kk": 418,
	"./kk.js": 418,
	"./km": 419,
	"./km.js": 419,
	"./kn": 420,
	"./kn.js": 420,
	"./ko": 421,
	"./ko.js": 421,
	"./ku": 422,
	"./ku.js": 422,
	"./ky": 423,
	"./ky.js": 423,
	"./lb": 424,
	"./lb.js": 424,
	"./lo": 425,
	"./lo.js": 425,
	"./lt": 426,
	"./lt.js": 426,
	"./lv": 427,
	"./lv.js": 427,
	"./me": 428,
	"./me.js": 428,
	"./mi": 429,
	"./mi.js": 429,
	"./mk": 430,
	"./mk.js": 430,
	"./ml": 431,
	"./ml.js": 431,
	"./mn": 432,
	"./mn.js": 432,
	"./mr": 433,
	"./mr.js": 433,
	"./ms": 434,
	"./ms-my": 435,
	"./ms-my.js": 435,
	"./ms.js": 434,
	"./mt": 436,
	"./mt.js": 436,
	"./my": 437,
	"./my.js": 437,
	"./nb": 438,
	"./nb.js": 438,
	"./ne": 439,
	"./ne.js": 439,
	"./nl": 440,
	"./nl-be": 441,
	"./nl-be.js": 441,
	"./nl.js": 440,
	"./nn": 442,
	"./nn.js": 442,
	"./oc-lnc": 443,
	"./oc-lnc.js": 443,
	"./pa-in": 444,
	"./pa-in.js": 444,
	"./pl": 445,
	"./pl.js": 445,
	"./pt": 446,
	"./pt-br": 447,
	"./pt-br.js": 447,
	"./pt.js": 446,
	"./ro": 448,
	"./ro.js": 448,
	"./ru": 449,
	"./ru.js": 449,
	"./sd": 450,
	"./sd.js": 450,
	"./se": 451,
	"./se.js": 451,
	"./si": 452,
	"./si.js": 452,
	"./sk": 453,
	"./sk.js": 453,
	"./sl": 454,
	"./sl.js": 454,
	"./sq": 455,
	"./sq.js": 455,
	"./sr": 456,
	"./sr-cyrl": 457,
	"./sr-cyrl.js": 457,
	"./sr.js": 456,
	"./ss": 458,
	"./ss.js": 458,
	"./sv": 459,
	"./sv.js": 459,
	"./sw": 460,
	"./sw.js": 460,
	"./ta": 461,
	"./ta.js": 461,
	"./te": 462,
	"./te.js": 462,
	"./tet": 463,
	"./tet.js": 463,
	"./tg": 464,
	"./tg.js": 464,
	"./th": 465,
	"./th.js": 465,
	"./tk": 466,
	"./tk.js": 466,
	"./tl-ph": 467,
	"./tl-ph.js": 467,
	"./tlh": 468,
	"./tlh.js": 468,
	"./tr": 469,
	"./tr.js": 469,
	"./tzl": 470,
	"./tzl.js": 470,
	"./tzm": 471,
	"./tzm-latn": 472,
	"./tzm-latn.js": 472,
	"./tzm.js": 471,
	"./ug-cn": 473,
	"./ug-cn.js": 473,
	"./uk": 474,
	"./uk.js": 474,
	"./ur": 475,
	"./ur.js": 475,
	"./uz": 476,
	"./uz-latn": 477,
	"./uz-latn.js": 477,
	"./uz.js": 476,
	"./vi": 478,
	"./vi.js": 478,
	"./x-pseudo": 479,
	"./x-pseudo.js": 479,
	"./yo": 480,
	"./yo.js": 480,
	"./zh-cn": 481,
	"./zh-cn.js": 481,
	"./zh-hk": 482,
	"./zh-hk.js": 482,
	"./zh-mo": 483,
	"./zh-mo.js": 483,
	"./zh-tw": 484,
	"./zh-tw.js": 484
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 816;

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_login_login__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, serviceLogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceLogin = serviceLogin;
        this.nome = '';
        this.usuario = '';
        this.senha = '';
    }
    CadastroPage.prototype.cadastrar = function () {
        var _this = this;
        if ((this.nome == '') || (this.senha == '') || (this.usuario == '')) {
            return __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()({
                title: "Atenção!",
                text: "Todos os campos são obrigatórios",
                timer: 2000,
                icon: "info"
            });
        }
        var dados = {
            nome: this.nome,
            usuario: this.usuario,
            senha: this.senha
        };
        this.serviceLogin.novoUsuario(dados).then(function () {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()({
                title: "Sucesso!",
                text: "Cadastro realizado!",
                icon: "success"
            }).then(function (resp) {
                if (resp) {
                    _this.voltar();
                }
            });
        });
    };
    CadastroPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\cadastro\cadastro.html"*/'<ion-content text-center id="edit">\n\n  <ion-grid class="logo edit">\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/imgs/logo_login.png" style="max-width: 65px;">\n      </ion-col>\n    </ion-row>\n\n    <form (ngSubmit)="cadastrar()">     \n\n      <ion-row>\n        <ion-col>\n          <ion-item padding style="background-color:transparent">\n            <ion-label stacked>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="nome" name="edit" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item padding style="background-color:transparent">\n            <ion-label stacked>Usuário</ion-label>\n            <ion-input type="text" [(ngModel)]="usuario" name="edit1" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item padding style="background-color:transparent">\n            <ion-label stacked>Senha</ion-label>\n            <ion-input type="password" [(ngModel)]="senha" name="edit2" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>    \n\n      <ion-row>\n        <ion-col padding>\n          <button type="submit" ion-button color="primary" block>Cadastrar</button>\n          <br>\n          <button type="submit" ion-button outline color="light" block (click)="voltar()">Voltar</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_login_login__["a" /* LoginProvider */]) === "function" && _c || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_agenda_agenda__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agendamento_agendamento__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__funcoes_comprar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams, actionSheetCtrl, comprar, serviceAgenda, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.comprar = comprar;
        this.serviceAgenda = serviceAgenda;
        this.modalCtrl = modalCtrl;
        this.total = 0;
    }
    CarrinhoPage.prototype.carregarCarrinho = function () {
        var _this = this;
        var carrinho = this.comprar.consultarQtdeCarrinho();
        if (carrinho < 1) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                title: "Ooops",
                text: "Seu carrinho está vazio",
                icon: "info",
            }).then(function () {
                return _this.navCtrl.pop();
            });
        }
        else {
            this.servico = [];
            this.servico = this.comprar.buscarItensCarrinho();
            this.total = this.servico.total;
        }
    };
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        this.carregarCarrinho();
    };
    CarrinhoPage.prototype.agendamento = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__agendamento_agendamento__["a" /* AgendamentoPage */], { item: item });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.servico.itens[parseInt(data.index)].data_agendamento = data.data_agendada;
                _this.servico.itens[parseInt(data.index)].hora_agendamento = data.hora_agendada;
            }
        });
    };
    CarrinhoPage.prototype.opcoes = function (item) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: '1x ' + item.servico,
            buttons: [
                {
                    text: 'Agendar Serviço',
                    icon: 'md-clock',
                    handler: function () {
                        _this.agendamento(item);
                    }
                },
                {
                    text: 'Remover Serviço',
                    icon: 'close-circle',
                    handler: function () {
                        _this.servico.itens.splice(item.index, 1);
                        var promises = [];
                        var promise = _this.comprar.excluirItemCarrinho(_this.servico.itens);
                        Promise.all(promises).then(function () {
                            _this.carregarCarrinho();
                        });
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    icon: 'md-arrow-round-back',
                }
            ]
        }).present();
    };
    CarrinhoPage.prototype.maisServicos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    CarrinhoPage.prototype.salvar = function () {
        var _this = this;
        var servico = null;
        servico = this.servico.itens.find(function (s) { return s.data_agendamento === ''; });
        if (servico != null) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                title: "Atenção!",
                text: "Há serviços sem agendamento!",
                timer: 2000,
                icon: "info"
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                title: "Confirmar?",
                text: "Realizar as reservas dos serviços?",
                icon: "info",
                buttons: ["Cancelar", "Reservar"],
                dangerMode: true,
            }).then(function (confirma) {
                if (confirma) {
                    _this.serviceAgenda.incluir(_this.servico.itens).then(function (resp) {
                        _this.comprar.limparCarrinho();
                        __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                            title: "Salvo!",
                            text: "Agendado com sucesso!",
                            timer: 2000,
                            icon: "success"
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                    }).catch(function (e) {
                        var erro = JSON.parse(e._body);
                        __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Erro ao salvar!", erro.Retorno, "error");
                    });
                }
            });
        }
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\carrinho\carrinho.html"*/'<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<ion-content padding>\n\n  <div *ngIf="servico != null">\n    <ion-list>\n      <ion-list-header style="padding-left: 0px; margin-bottom: -12px;">\n        Seu Carrinho\n      </ion-list-header>\n    </ion-list>\n\n    <ion-row *ngFor="let s of servico.itens">\n      <ion-col col-9 style="padding: 0!important;">\n        <p>1x {{s.servico}}</p>\n        <div *ngIf="s.data_agendamento == \'\'">\n          <button ion-button icon-start small clear color="danger" style="margin: 0;" (click)="agendamento(s)">\n            <ion-icon name="warning"></ion-icon>\n            Sem Agendamento\n          </button>\n        </div>\n        <div *ngIf="s.data_agendamento !== \'\'">\n          <button ion-button icon-start small clear color="primary" style="margin: 0;" (click)="agendamento(s)">            \n            <ion-icon name="checkmark"></ion-icon>\n            {{s.data_agendamento}} as {{s.hora_agendamento}}            \n          </button>\n        </div>\n      </ion-col>\n\n      <ion-col col-2 style="padding: 0!important;">\n        <p>{{s.valor | currency:"BRL":true:"1.2"}}</p>\n      </ion-col>\n\n      <ion-col col-1 style="padding: 0!important;">\n        <ion-buttons end>\n          <button ion-button icon-only clear (click)="opcoes(s)">\n            <ion-icon name="more"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n\n    <br>\n\n    <button ion-button full outline small (click)="maisServicos()">Adicionar mais serviços</button>\n\n    <ion-row>\n      <ion-col col-8 style="padding: 0!important;">\n        <span style="font-size: large;">\n          <p><strong>Total</strong></p>\n        </span>\n      </ion-col>\n      <ion-col col-4 style="padding: 0!important; text-align: center;">\n        <span style="font-size: large;">\n          <p><strong>{{total | currency:"BRL":true:"1.2"}}</strong></p>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<br><br>\n\n<ion-footer text-center no-border text-capitalize="false">\n  <ion-toolbar transparent>\n    <button ion-button full color="verde" style="border-radius: 10px; text-transform: none;"\n      (click)="salvar()">Finalizar</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__funcoes_comprar__["a" /* Comprar */],
            __WEBPACK_IMPORTED_MODULE_1__providers_agenda_agenda__["a" /* AgendaProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendamentoPage = /** @class */ (function () {
    function AgendamentoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.now = new Date();
        this.data = new Date().toISOString();
        this.hora = this.now.getHours() + ':' + new Date().getMinutes();
        this.item = null;
    }
    AgendamentoPage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('item');
    };
    AgendamentoPage.prototype.salvar = function () {
        var _this = this;
        if ((parseInt(this.hora.slice(0, 2)) > 17) || (parseInt(this.hora.slice(0, 2)) < 8)) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()({
                title: "Ooops",
                text: "Horário de funcionamento do Braulino's é das 08:00 as 18:00",
                icon: "warning",
            }).then(function () {
                return;
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()({
                title: "Confirmar?",
                text: "Agendar para o dia " + __WEBPACK_IMPORTED_MODULE_3_moment__(this.data).format('DD/MM/YYYY') + ' as ' + this.hora + '?',
                icon: "info",
                buttons: ["Não", "Sim"],
                dangerMode: true,
            }).then(function (confirma) {
                if (confirma) {
                    _this.viewCtrl.dismiss({ index: _this.item.index, data_agendada: __WEBPACK_IMPORTED_MODULE_3_moment__(_this.data).format('DD/MM/YYYY'), hora_agendada: _this.hora });
                }
            });
        }
    };
    AgendamentoPage.prototype.fechar = function () {
        this.navCtrl.pop();
    };
    AgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agendamento',template:/*ion-inline-start:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\agendamento\agendamento.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-title>Agendar Serviço</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="item != null">\n    <ion-card-content>\n      <button ion-item style="padding-left:0px">\n        <ion-icon color="primary" name="md-clock" item-end></ion-icon>\n        <h2 text-justify>\n          <h2 text-justify style="color: #2F2D81"><strong>{{item.servico}}</strong></h2>\n        </h2>\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <br><br><br>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Dia</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="data" cancelText="Cancelar" doneText="Confirmar">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hora</ion-label>\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="hora" cancelText="Cancelar" doneText="Confirmar">\n      </ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <br><br>\n\n  <div padding>\n    <button ion-button block round icon-start (click)="salvar()">\n      <ion-icon name="checkmark"></ion-icon>\n      Agendar\n    </button>\n    <br>\n    <button ion-button block round outline icon-start color="danger" (click)="fechar()">\n      <ion-icon name="close"></ion-icon>\n      Cancelar\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Marcus Vinicius\Ionic\BraulinosApp\src\pages\agendamento\agendamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AgendamentoPage);
    return AgendamentoPage;
}());

//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _urlBase; });
var _urlBase = 'http://localhost:3000/';
//# sourceMappingURL=urlbase.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map