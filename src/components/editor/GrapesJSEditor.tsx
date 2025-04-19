import React, { useEffect, useRef } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./editor.css";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import { useToast } from "@/hooks/use-toast";

// Importações de componentes da landing page
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StorySection } from "@/components/StorySection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection"; 
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FaqSection } from "@/components/FaqSection";
import { CallToActionSection } from "@/components/CallToActionSection";

interface GrapesJSEditorProps {
  isPreview?: boolean;
}

export const GrapesJSEditor: React.FC<GrapesJSEditorProps> = ({ isPreview = false }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<grapesjs.Editor | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!editorRef.current) return;

    editor.current = grapesjs.init({
      container: editorRef.current,
      height: "100%",
      width: "100%",
      storageManager: {
        type: "local",
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        id: "manus-landing-editor",
      },
      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: "",
          },
          {
            name: "Tablet",
            width: "768px",
            widthMedia: "768px",
          },
          {
            name: "Mobile",
            width: "375px",
            widthMedia: "375px",
          },
        ],
      },
      styleManager: {
        sectors: [
          {
            name: "Tipografia",
            open: false,
            properties: [
              "font-family",
              "font-size",
              "font-weight",
              "text-align",
              "text-decoration",
              "font-style",
              "color",
              "line-height",
            ],
          },
          {
            name: "Dimensões",
            open: false,
            properties: ["width", "height", "max-width", "min-height", "margin", "padding"],
          },
          {
            name: "Fundo",
            open: false,
            properties: [
              "background-color",
              "background-image",
              "background-repeat",
              "background-position",
              "background-size",
              "background-attachment",
            ],
          },
          {
            name: "Borda",
            open: false,
            properties: ["border-radius", "border", "box-shadow"],
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: "layers",
            el: ".panel__right",
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0,
              cl: 1,
              cr: 0,
              bc: 0,
              keyWidth: "flex-basis",
            },
          },
          {
            id: "panel-devices",
            el: ".panel__devices",
            buttons: [
              {
                id: "device-desktop",
                label: "Desktop",
                command: "set-device-desktop",
                active: true,
                togglable: false,
              },
              {
                id: "device-tablet",
                label: "Tablet",
                command: "set-device-tablet",
                togglable: false,
              },
              {
                id: "device-mobile",
                label: "Mobile",
                command: "set-device-mobile",
                togglable: false,
              },
            ],
          },
        ],
      },
      blockManager: {
        appendTo: ".blocks-container",
        blocks: [
          {
            id: "hero-section",
            label: "Seção Hero",
            category: "Seções",
            content: '<div data-gjs-type="hero-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "problem-section",
            label: "Seção Problema",
            category: "Seções",
            content: '<div data-gjs-type="problem-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "story-section",
            label: "Seção História",
            category: "Seções",
            content: '<div data-gjs-type="story-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "solution-section",
            label: "Seção Solução",
            category: "Seções",
            content: '<div data-gjs-type="solution-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "testimonials-section",
            label: "Seção Depoimentos",
            category: "Seções",
            content: '<div data-gjs-type="testimonials-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "offer-section",
            label: "Seção Oferta",
            category: "Seções",
            content: '<div data-gjs-type="offer-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "guarantee-section",
            label: "Seção Garantia",
            category: "Seções",
            content: '<div data-gjs-type="guarantee-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "faq-section",
            label: "Seção FAQ",
            category: "Seções",
            content: '<div data-gjs-type="faq-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "call-to-action-section",
            label: "Seção CTA",
            category: "Seções",
            content: '<div data-gjs-type="call-to-action-section"></div>',
            media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>',
          },
          {
            id: "button",
            label: "Botão",
            category: "Básicos",
            content: '<button class="button">Clique Aqui</button>',
            media: '<svg viewBox="0 0 24 24"><path d="M20 20.5H4a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 4 14.5h16a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5z"></path></svg>',
          },
          {
            id: "image",
            label: "Imagem",
            category: "Básicos",
            media: '<svg viewBox="0 0 24 24"><path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>',
            content: {
              type: "image",
              style: { padding: "10px" },
              activeOnRender: true,
            },
          },
          {
            id: "video",
            label: "Vídeo",
            category: "Básicos",
            media: '<svg viewBox="0 0 24 24"><path d="M15 8v8H5V8h10m1-2H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1z"></path><path d="M20 6l-4 4v4l4 4V6z"></path></svg>',
            content: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              style: {
                height: "350px",
                width: "100%",
              },
            },
          },
        ],
      },
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {},
      },
    });

    // Registrar componentes personalizados
    const comps = editor.current.DomComponents;
    const defaultType = comps.getType("default");
    const defaultModel = defaultType.model;

    // Criar componente Hero
    comps.addType("hero-section", {
      model: defaultModel.extend({
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Seção Hero",
          draggable: true,
          droppable: true,
          editable: true,
        },
      }),
      view: defaultType.view.extend({
        render: function() {
          defaultType.view.prototype.render.apply(this, arguments);
          this.el.innerHTML = `
            <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary-dark text-white py-20">
              <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                  <h1 class="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    CRIE PÁGINAS DE VENDAS PROFISSIONAIS QUE CONVERTEM DE VERDADE EM MINUTOS
                  </h1>
                  <p class="text-xl md:text-2xl mb-8 text-gray-200">
                    Finalmente você tem acesso à mesma estrutura das 15 etapas que gerou BILHÕES de dólares nos EUA, Brasil e resto do mundo - agora automatizada por um agente de IA que faz TODO O TRABALHO PARA VOCÊ
                  </p>
                  <div class="bg-black/20 rounded-lg p-4 mb-8 aspect-video flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                    <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                  <button class="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-6 px-8 rounded-md">
                    👉 QUERO CRIAR PÁGINAS QUE CONVERTEM AGORA 👈
                  </button>
                </div>
              </div>
            </section>
          `;
          return this;
        },
      }),
    });

    // Criar componente Problem
    comps.addType("problem-section", {
      model: defaultModel.extend({
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Seção Problema",
          draggable: true,
          droppable: true,
          editable: true,
        },
      }),
      view: defaultType.view.extend({
        render: function() {
          defaultType.view.prototype.render.apply(this, arguments);
          this.el.innerHTML = `
            <section class="py-20 bg-gray-50">
              <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div class="p-6">
                    <h2 class="text-3xl font-display text-center text-primary mb-6">
                      A verdade que ninguém tem coragem de te contar:
                    </h2>
                    <div class="space-y-6">
                      <div class="flex items-start gap-4">
                        <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                        <p class="text-lg">
                          Em 2025, apenas os profissionais que dominarem o uso de agentes inteligentes autônomos sobreviverão no marketing digital.
                        </p>
                      </div>
                      <div class="space-y-4 text-lg">
                        <p>Enquanto você continua se arrastando com ferramentas obsoletas...</p>
                        <p>Enquanto você segue catando milho tentando criar páginas de vendas preenchendo templates desajeitados...</p>
                        <p>Enquanto você desperdiça horas preciosas vomitando textos genéricos em construtores de sites que não convertem no seu nicho...</p>
                        <p>Seus concorrentes já estão revolucionando seus negócios com tecnologia de ponta que trabalha POR ELES.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `;
          return this;
        },
      }),
    });

    // Criar componente Story
    comps.addType("story-section", {
      model: defaultModel.extend({
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Seção História",
          draggable: true,
          droppable: true,
          editable: true,
        },
      }),
      view: defaultType.view.extend({
        render: function() {
          defaultType.view.prototype.render.apply(this, arguments);
          this.el.innerHTML = `
            <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
              <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div class="p-6">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="bg-primary rounded-full p-3">
                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <h2 class="text-3xl font-display text-primary">Quem sou eu para falar sobre isso?</h2>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div class="relative aspect-square rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                          alt="Fabio Rocha"
                          class="object-cover w-full h-full"
                        />
                      </div>
                      <div class="space-y-4">
                        <p class="text-lg">Olá, meu nome é Fabio Rocha.</p>
                        <p>Minha história não é convencional. Cursei direito, filosofia e teologia.</p>
                        <p>Vivi quase uma década como voluntário dormindo nas ruas de São Paulo e favelas do Rio para resgatar pessoas carentes.</p>
                        <p>Até me tornar dono de uma indústria gráfica milionária com 25 colaboradores.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `;
          return this;
        },
      }),
    });

    // Restante dos componentes (adicionar de forma similar)
    comps.addType("solution-section", {
      model: defaultModel.extend({
        defaults: { ...defaultModel.prototype.defaults, name: "Seção Solução", draggable: true, droppable: true, editable: true },
      }),
      view: defaultType.view.extend({
        render: function() {
          defaultType.view.prototype.render.apply(this, arguments);
          this.el.innerHTML = `
            <section class="py-20 bg-gradient-to-b from-primary-dark to-primary text-white">
              <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                  <svg class="w-12 h-12 mx-auto mb-6 text-accent animate-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/><path d="M12 6v6l4 2"/></svg>
                  <h2 class="text-3xl md:text-4xl font-display mb-8">A virada de jogo que ninguém viu chegando</h2>
                  <div class="grid md:grid-cols-2 gap-8 mb-12">
                    <div class="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                        alt="Tecnologia AI avançada"
                        class="object-cover w-full h-full"
                      />
                    </div>
                    <div class="text-left space-y-4">
                      <p class="text-lg">Descobri o poder dos agentes inteligentes verdadeiramente autônomos.</p>
                      <p>Especificamente, o Manus.ai - a maior revolução no campo de IA desde a chegada do ChatGPT.</p>
                      <div class="space-y-3 mt-6">
                        <div class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          <span>Fluxos para tradução de livros com qualidade SUPERIOR</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          <span>Geração de audiobooks profissionais</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          <span>Diagramação automática</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `;
          return this;
        },
      }),
    });

    comps.addType("testimonials-section", {
      model: defaultModel.extend({
        defaults: { ...defaultModel.prototype.defaults, name: "Seção Depoimentos", draggable: true, droppable: true },
      }),
      view: defaultType.view.extend({
        render: function() {
          defaultType.view.prototype.render.apply(this, arguments);
          this.el.innerHTML = `
            <section class="py-20 bg-gradient-to-b from-white to-gray-50">
              <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-display text-center text-primary mb-12">
                  O que outras pessoas estão dizendo:
                </h2>
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                    <div class="flex items-center gap-4">
                      <svg class="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      <div>
                        <h3 class="font-semibold">Ronald Crawford</h3>
                      </div>
                    </div>
                    <p class="text-gray-700">
                      "Acabei de ter minha primeira experiência com a Manus para web design e estou realmente impressionado! O agente criou uma landing page HTML/CSS completa com um logotipo personalizado que realmente parecia profissional."
                    </p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                    <div class="flex items-center gap-4">
                      <svg class="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      <div>
                        <h3 class="font-semibold">Julian Goldie</h3>
                      </div>
                    </div>
                    <p class="text-gray-700">
                      "A diferença é gritante: Humanos precisam de instruções detalhadas, fazem perguntas esclarecedoras, ficam presos em questões técnicas. Manus descobre o que fazer a partir de instruções vagas, resolve seus próprios problemas."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          `;
          return this;
        },
      }),
    });

    // Adicione outros tipos de componentes de seção da mesma forma

    // Configurações adicionais para o editor
    editor.current.on("load", () => {
      // Remover placeholder se existir
      const wrapper = editor.current.DomComponents.getWrapper();
      if (wrapper) {
        const component = editor.current.addComponents(`
          <div class="min-h-screen bg-white font-sans">
            <div data-gjs-type="hero-section"></div>
            <div data-gjs-type="problem-section"></div>
            <div data-gjs-type="story-section"></div>
            <div data-gjs-type="solution-section"></div>
            <div data-gjs-type="testimonials-section"></div>
          </div>
        `);
      }
    });

    // Adicionar comandos para responsividade
    editor.current.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.current.Commands.add("set-device-tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
    editor.current.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });

    // Implementar desfazer/refazer
    const undoManager = editor.current.UndoManager;
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        if (e.shiftKey) {
          undoManager.redo();
        } else {
          undoManager.undo();
        }
        e.preventDefault();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "y") {
        undoManager.redo();
        e.preventDefault();
      }
    });

    return () => {
      editor.current?.destroy();
    };
  }, []);

  // Atualizar o modo de visualização
  useEffect(() => {
    if (editor.current) {
      const panels = editor.current.Panels.getPanel("options");
      if (isPreview) {
        // Ocultar painéis e painel lateral
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel) {
            const htmlElement = panel as HTMLElement;
            htmlElement.style.display = "none";
          }
        });
        
        const canvasElement = document.querySelector(".gjs-cv-canvas") as HTMLElement;
        if (canvasElement) {
          canvasElement.style.width = "100%";
          canvasElement.style.height = "100%";
        }
        
        editor.current.runCommand("core:preview");
      } else {
        // Mostrar painéis e painel lateral
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel) {
            const htmlElement = panel as HTMLElement;
            htmlElement.style.display = "block";
          }
        });
        
        const canvasElement = document.querySelector(".gjs-cv-canvas") as HTMLElement;
        if (canvasElement) {
          canvasElement.style.width = "calc(100% - 300px)";
          canvasElement.style.height = "100%";
        }
        
        editor.current.stopCommand("core:preview");
      }
    }
  }, [isPreview]);

  return (
    <div className="flex h-full w-full">
      <div className="gjs-editor-cont flex-1" ref={editorRef}>
        <div className="panel__devices"></div>
        <div className="panel__basic-actions"></div>
        <div className="blocks-container"></div>
        <div className="panel__right"></div>
      </div>
    </div>
  );
};
