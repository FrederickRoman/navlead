# Navlead

<img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/navlead_logo_plain.svg" height="320"/>

## AI-powered assistant chatbot for navigation in 3D enviroments. 



The chatbot was trained on real-world navigation assistance dialogs to give natural responses.

The 3D enviroments were reconstructed form real-world houses.



<div style="display:flex; justify-content:center; align-items:center;">
    <img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/navlead_dialog_iPhone.png" height="300" alt="Navlead simulation iPhone mockup"/>
    <img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/navlead_iPad.png" height="300" alt="Navlead simulation iPad mockup"/>
    <img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/target_popup_bed.png" height="300" alt="Navlead simulation iPhone mockup"/>
</div>

![Navlead gif](https://github.com/FrederickRoman/navlead/blob/main/public/video/hero_bg_video.gif?raw=true)

## Overview of NavLead

Navlead is an AI-powered assistant chatbot for navigation in 3D enviroments. The simulation, the chatbot, and their deployment online are all part of this project. (Note: this repo contains the client-side section only)

The simulation has custom 3D assets, a chat dialog box, motion controls and game logic. The chatbot has a custom ML NLP model that has a seq2seq architecture and was trained on CVDN dataset. The client-host loads the simulation and mediates its interactions with the API server. The API server authenticates the request and runs the ML NLP model.

<div style="display:flex; justify-content:center; align-items:center;">
    <img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/sys_arch_diagram.svg" height="300" alt="Navlead system architecture diagram"/>
</div>

### Motivation

Inspired by the rise of VR and AI, this project aims to combine both into a navigation assistance system that can run through the browser.

<div style="display:flex; justify-content:space-evenly; align-items:center;">
    <img src="https://github.com/FrederickRoman/navlead/blob/main/docs/v_1_3/img/question_sample.png" width="20%" alt="Navlead questin sample"/>
    <img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/target_popup_bed.png" width="20%" alt="Navlead target sample"/>
    <img src="https://github.com/FrederickRoman/navlead/blob/main/docs/v_1_3/img/location_sample.png" width="10%" alt="Navlead location sample"/>
</div>
<img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/navleadnet_main_diagram.svg" width="50%" alt="NavleadNet main diagram"/>
<div style="display:flex; justify-content:center; align-items:center;">
    <img src="https://github.com/FrederickRoman/navlead/blob/main/docs/v_1_3/img/answer_sample.png" width="50%" alt="Navlead answer sample"/>
</div>

## Tech stack of Navlead

- Client-side 
    - Simulation
        - Blender (3.1)
        - Unity (2020.3 LTS)
    - UI
        - React (Next ts)
- Server-side (<strong>not</strong> on this repo)
    - API server
        - Django
    - ML service
        - Pytorch

## In-depth explanation

For an in-depth explanation of this project, please, see [Navlead's About page](https://navlead.vercel.app/about)

<img src="https://github.com/FrederickRoman/navlead/blob/main/public/img/about_img_quilt_md.png" width="50%" alt="Navlead's about page image quilt"/>

- [TLDR;](https://navlead.vercel.app/about#about_tldr)
- [Motivation](https://navlead.vercel.app/about#about_motivation)
- [3D simulation](https://navlead.vercel.app/about#about_simulation-3d-modeling)
    - [Modeling 3D enviroment in Blender](https://navlead.vercel.app/about#about_modeling-3d-enviroment)
    - [Adding game controls in Unity](https://navlead.vercel.app/about#about_adding-game-controls)
    - [Bridging simulation to browser (Unity-side)](https://navlead.vercel.app/about#about_sim-to-browser-js)
- [Client-side integration](https://navlead.vercel.app/about#about_client-side)
    - [Loading Unity Script](https://navlead.vercel.app/about#about_loading-unity-script)
    - [Bridging simulation to browser (browser-side)](https://navlead.vercel.app/about#about_sim-to-browser-js)
    - [Answer simulation question](https://navlead.vercel.app/about#about_answer-sim-question)
- [Server-side API](https://navlead.vercel.app/about#about_server-side)
    - [Request handling](https://navlead.vercel.app/about#about_req-handling)
- [Machine Learning](https://navlead.vercel.app/about#about_machine-learning)
    - [Data](https://navlead.vercel.app/about#about_ml-data)
    - [Training](https://navlead.vercel.app/about#about_ml-training)
    - [Results](https://navlead.vercel.app/about#about_ml-results)
- [References](https://navlead.vercel.app/about#about_references)
- [Authors](https://navlead.vercel.app/about#about_authors)
    - [Frederick Roman](https://navlead.vercel.app/about#about_author-frederick-roman)
    - [Homero Roman](https://navlead.vercel.app/about#about_author-homero-roman)

## Live website

See [Navlead](https://navlead.vercel.app).

## Project setup

```
npm install
```

### Compiles and hot-reloads

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Acknowledgements
### Vision-and-Dialog Navigation
    https://arxiv.org/abs/1907.04957
    https://github.com/mmurray/cvdn
