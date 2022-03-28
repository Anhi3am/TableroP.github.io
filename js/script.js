//Paso 1. Crear la función ready
$(function () {
  //Paso 2. Crear las variables globales
  var angulo = 35; //Angulo de la camara
  var ancho = window.innerWidth - 425; //Ancho de la pantalla
  var alto = window.innerHeight - 292; //Alto de la pantalla
  var aspecto = window.innerWidth / window.innerHeight;
  var cerca = 0.1; //Cerca de la camara
  var lejos = 1000; //Lejos de la camara

  var plano;
  var tablero;

  var cuadro1;
  var cuadro2;
  var cuadro3;
  var cuadro4;
  var cuadro5;
  var cuadro6;
  var cuadro7;
  var cuadro8;
  var cuadro9;
  var cuadro10;
  var cuadro11;
  var cuadro12;
  var cuadro13;
  var cuadro14;
  var cuadro15;
  var cuadro16;
  var cuadro17;
  var cuadro18;
  var cuadro19;
  var cuadro20;
  var cuadro21;
  var cuadro22;
  var cuadro23;
  var cuadro24;
  var cuadro25;
  var cuadro26;
  var cuadro27;
  var cuadro28;
  var cuadro29;
  var cuadro30;
  var cuadro31;
  var cuadro32;
  var cuadro33;
  var cuadro34;
  var cuadro35;
  var cuadro36;
  var cuadro37;
  var cuadro38;
  var cuadro39;
  var cuadro40;
  var cuadro33Color;
  var cuadro34Color;
  var cuadro35Color;
  var cuadro36Color;
  var cuadro37Color;
  var cuadro38Color;
  var cuadro39Color;
  var cuadro40Color;
  var cuadro1Color;
  var cuadro2Color;
  var cuadro3Color;
  var cuadro4Color;
  var cuadro5Color;
  var cuadro6Color;
  var cuadro7Color;
  var cuadro8Color;
  var cuadro9Color;
  var cuadro10Color;
  var cuadro11Color;
  var cuadro12Color;
  var cuadro13Color;
  var cuadro14Color;
  var cuadro15Color;
  var cuadro16Color;
  var cuadro17Color;
  var cuadro18Color;
  var cuadro19Color;
  var cuadro20Color;
  var cuadro21Color;
  var cuadro22Color;
  var cuadro23Color;
  var cuadro24Color;
  var cuadro25Color;
  var cuadro26Color;
  var cuadro27Color;
  var cuadro28Color;
  var cuadro29Color;
  var cuadro30Color;
  var cuadro31Color;
  var cuadro32Color;
  var cuadro41;
  var cuadro41Color;
  var cuadro42Color;
  var cuadro42;
  var cylinder,
    cylinder2,
    cylinder3,
    cylinder4,
    cylinder5,
    cylinder6,
    cylinder7,
    cylinder8,
    cylinder9,
    cylinder10,
    cylinder11,
    cylinder12;
  var etiquetav, etiquetav2, etiquetav3, etiquetav4;

  var titu;
  var legend, legend2;

  var controls; //Control de la figura
  var ejes; //Ejes de nuestro plano

  var escenario = new THREE.Scene(); //Objeto escenario
  var camara = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos); //Objeto camara
  var render = new THREE.WebGLRenderer(); //Objeto render
  THREEx.WindowResize(render, camara);

  //Paso 3. Crear función inicio
  function inicio() {
    //Posición de la camara
    camara.position.set(-30, 40, 30);

    //Características del render
    render.setSize(ancho, alto); //Tamaño del render
    render.setClearColor(0x81bef7); //Color del render
    $("#render").append(render.domElement); //Ubicacion del render en el html

    //Ejes
    var ejes = new THREE.AxisHelper(5);
    escenario.add(ejes);

    //Agregamos controles a la camara y el render
    controls = new THREE.OrbitControls(camara, render.domElement);

    //Rejilla
    var rejilla = new THREE.GridHelper(16, 8, colorRejilla, 0xffffff); //Tamaño de la rejilla y color de los cuadros
    var colorRejilla = new THREE.Color("rgb(255,0,0)"); //Color de los ejes x y y
    escenario.add(rejilla);
  }

  //Paso 5. Crear función renderModelo
  function renderModelo() {
    controls.update();
    render.render(escenario, camara);
  }

  //Paso 6. Crear función animacion
  function animacion() {
    requestAnimationFrame(animacion);
    renderModelo();
  }
  $("#dibujo").on("click", function () {
    inicio();
    animacion();
  });

  //Creación del plano
  function crear_plano() {
    var geometryPlano = new THREE.PlaneGeometry(28, 20);
    var materialPlano = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      side: THREE.DoubleSide,
    });
    plano = new THREE.Mesh(geometryPlano, materialPlano);
    plano.rotation.x = -1.5 * Math.PI;
    plano.position.set(0, 0, 0);
    escenario.add(plano);
  }

  $("#plano").on("click", function () {
    crear_plano();
  });

  //tablero
  function figuraTablero() {
    var geometriaCuadro = new THREE.Geometry();
    geometriaCuadro.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    var materialCuadro = new THREE.LineBasicMaterial({ color: 0x4747d1 });
    cuadro1 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro1.position.set(-14, -5.9, -2);
    escenario.add(cuadro1);

    cuadro2 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro2.position.set(-12, -5.9, -2);
    escenario.add(cuadro2);

    cuadro3 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro3.position.set(-10, -5.9, -2);
    escenario.add(cuadro3);

    cuadro4 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro4.position.set(-8, -5.9, -2);
    escenario.add(cuadro4);

    cuadro5 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro5.position.set(-6, -5.9, -2);
    escenario.add(cuadro5);

    cuadro6 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro6.position.set(-4, -5.9, -2);
    escenario.add(cuadro6);

    cuadro7 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro7.position.set(-2, -5.9, -2);
    escenario.add(cuadro7);

    cuadro8 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro8.position.set(0, -5.9, -2);
    escenario.add(cuadro8);

    cuadro9 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro9.position.set(-14, -3.9, -2);
    escenario.add(cuadro9);

    cuadro10 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro10.position.set(-12, -3.9, -2);
    escenario.add(cuadro10);

    cuadro11 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro11.position.set(-10, -3.9, -2);
    escenario.add(cuadro11);

    cuadro12 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro12.position.set(-8, -3.9, -2);
    escenario.add(cuadro12);

    cuadro13 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro13.position.set(-6, -3.9, -2);
    escenario.add(cuadro13);

    cuadro14 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro14.position.set(-4, -3.9, -2);
    escenario.add(cuadro14);

    cuadro15 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro15.position.set(-2, -3.9, -2);
    escenario.add(cuadro15);

    cuadro16 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro16.position.set(0, -3.9, -2);
    escenario.add(cuadro16);

    cuadro17 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro17.position.set(-14, -1.9, -2);
    escenario.add(cuadro17);

    cuadro18 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro18.position.set(-12, -1.9, -2);
    escenario.add(cuadro18);

    cuadro19 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro19.position.set(-10, -1.9, -2);
    escenario.add(cuadro19);

    cuadro20 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro20.position.set(-8, -1.9, -2);
    escenario.add(cuadro20);

    cuadro21 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro21.position.set(-6, -1.9, -2);
    escenario.add(cuadro21);

    cuadro22 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro22.position.set(-4, -1.9, -2);
    escenario.add(cuadro22);

    cuadro23 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro23.position.set(-2, -1.9, -2);
    escenario.add(cuadro23);

    cuadro24 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro24.position.set(0, -1.9, -2);
    escenario.add(cuadro24);

    cuadro25 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro25.position.set(-14, 0.1, -2);
    escenario.add(cuadro25);

    cuadro26 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro26.position.set(-12, 0.1, -2);
    escenario.add(cuadro26);

    cuadro27 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro27.position.set(-10, 0.1, -2);
    escenario.add(cuadro27);

    cuadro28 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro28.position.set(-8, 0.1, -2);
    escenario.add(cuadro28);

    cuadro29 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro29.position.set(-6, 0.1, -2);
    escenario.add(cuadro29);

    cuadro30 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro30.position.set(-4, 0.1, -2);
    escenario.add(cuadro30);

    cuadro31 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro31.position.set(-2, 0.1, -2);
    escenario.add(cuadro31);

    cuadro32 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro32.position.set(0, 0.1, -2);
    escenario.add(cuadro32);
  }
  $("#lc1").on("click", function () {
    figuraTablero();
  });

  //lado del tablero
  function cTablero() {
    var geometriaCuadroColor = new THREE.Geometry();
    geometriaCuadroColor.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    geometriaCuadroColor.faces.push(
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(2, 3, 0)
    );

    var materialCuadro1Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro1Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro1Color);
    cuadro1Color.position.set(-14, -5.9, -2);
    escenario.add(cuadro1Color);

    var materialCuadro2Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro2Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro2Color);
    cuadro2Color.position.set(-12, -5.9, -2);
    escenario.add(cuadro2Color);

    var materialCuadro3Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro3Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro3Color);
    cuadro3Color.position.set(-10, -5.9, -2);
    escenario.add(cuadro3Color);

    var materialCuadro4Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro4Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro4Color);
    cuadro4Color.position.set(-8, -5.9, -2);
    escenario.add(cuadro4Color);

    var materialCuadro5Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro5Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro5Color);
    cuadro5Color.position.set(-6, -5.9, -2);
    escenario.add(cuadro5Color);

    var materialCuadro6Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro6Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro6Color);
    cuadro6Color.position.set(-4, -5.9, -2);
    escenario.add(cuadro6Color);

    var materialCuadro7Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro7Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro7Color);
    cuadro7Color.position.set(-2, -5.9, -2);
    escenario.add(cuadro7Color);

    var materialCuadro8Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro8Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro8Color);
    cuadro8Color.position.set(0, -5.9, -2);
    escenario.add(cuadro8Color);

    var materialCuadro9Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro9Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro9Color);
    cuadro9Color.position.set(-14, -3.9, -2);
    escenario.add(cuadro9Color);

    var materialCuadro10Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro10Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro10Color);
    cuadro10Color.position.set(-12, -3.9, -2);
    escenario.add(cuadro10Color);

    var materialCuadro11Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro11Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro11Color);
    cuadro11Color.position.set(-10, -3.9, -2);
    escenario.add(cuadro11Color);

    var materialCuadro12Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro12Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro12Color);
    cuadro12Color.position.set(-8, -3.9, -2);
    escenario.add(cuadro12Color);

    var materialCuadro13Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro13Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro13Color);
    cuadro13Color.position.set(-6, -3.9, -2);
    escenario.add(cuadro13Color);

    var materialCuadro14Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro14Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro14Color);
    cuadro14Color.position.set(-4, -3.9, -2);
    escenario.add(cuadro14Color);

    var materialCuadro15Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro15Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro15Color);
    cuadro15Color.position.set(-2, -3.9, -2);
    escenario.add(cuadro15Color);

    var materialCuadro16Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro16Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro16Color);
    cuadro16Color.position.set(0, -3.9, -2);
    escenario.add(cuadro16Color);

    var materialCuadro17Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro17Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro17Color);
    cuadro17Color.position.set(-14, -1.9, -2);
    escenario.add(cuadro17Color);

    var materialCuadro18Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro18Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro18Color);
    cuadro18Color.position.set(-12, -1.9, -2);
    escenario.add(cuadro18Color);

    var materialCuadro19Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro19Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro19Color);
    cuadro19Color.position.set(-10, -1.9, -2);
    escenario.add(cuadro19Color);

    var materialCuadro20Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro20Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro20Color);
    cuadro20Color.position.set(-8, -1.9, -2);
    escenario.add(cuadro20Color);

    var materialCuadro21Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro21Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro21Color);
    cuadro21Color.position.set(-6, -1.9, -2);
    escenario.add(cuadro21Color);

    var materialCuadro22Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro22Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro22Color);
    cuadro22Color.position.set(-4, -1.9, -2);
    escenario.add(cuadro22Color);

    var materialCuadro23Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro23Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro23Color);
    cuadro23Color.position.set(-2, -1.9, -2);
    escenario.add(cuadro23Color);

    var materialCuadro24Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro24Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro24Color);
    cuadro24Color.position.set(0, -1.9, -2);
    escenario.add(cuadro24Color);

    var materialCuadro25Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro25Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro25Color);
    cuadro25Color.position.set(-14, 0.1, -2);
    escenario.add(cuadro25Color);

    var materialCuadro26Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro26Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro26Color);
    cuadro26Color.position.set(-12, 0.1, -2);
    escenario.add(cuadro26Color);

    var materialCuadro27Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro27Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro27Color);
    cuadro27Color.position.set(-10, 0.1, -2);
    escenario.add(cuadro27Color);

    var materialCuadro28Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro28Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro28Color);
    cuadro28Color.position.set(-8, 0.1, -2);
    escenario.add(cuadro28Color);

    var materialCuadro29Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro29Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro29Color);
    cuadro29Color.position.set(-6, 0.1, -2);
    escenario.add(cuadro29Color);

    var materialCuadro30Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro30Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro30Color);
    cuadro30Color.position.set(-4, 0.1, -2);
    escenario.add(cuadro30Color);

    var materialCuadro31Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro31Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro31Color);
    cuadro31Color.position.set(-2, 0.1, -2);
    escenario.add(cuadro31Color);

    var materialCuadro32Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro32Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro32Color);
    cuadro32Color.position.set(0, 0.1, -2);
    escenario.add(cuadro32Color);
  }

  $("#lc1").click(function () {
    cTablero();
  });

  function Cuadriculada1v() {
    var geometriaCuadro = new THREE.Geometry();
    geometriaCuadro.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    var materialCuadro = new THREE.LineBasicMaterial({ color: 0x8d93ff });
    cuadro33 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro33.rotation.y = 0.5;
    cuadro33.position.set(-14.8, -5.9, 1.7);
    escenario.add(cuadro33);

    //Segunda linea
    cuadro34 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro34.rotation.y = 0.5;
    cuadro34.position.set(-14.8, -3.9, 1.7);
    escenario.add(cuadro34);

    //Tercera linea
    cuadro35 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro35.rotation.y = 0.5;
    cuadro35.position.set(-14.8, -1.9, 1.7);
    escenario.add(cuadro35);

    //Cuarta linea

    cuadro36 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro36.rotation.y = 0.5;
    cuadro36.position.set(-14.8, 0.1, 1.7);
    escenario.add(cuadro36);
  }
  $("#lc2").on("click", function () {
    Cuadriculada1v();
  });
  function Cuadriculada2c() {
    var geometriaCuadroColor = new THREE.Geometry();
    geometriaCuadroColor.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    geometriaCuadroColor.faces.push(
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(2, 3, 0)
    );

    //1 Linea
    var materialCuadro33Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro33Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro33Color);
    cuadro33Color.position.set(-14.8, -5.9, 1.7);
    cuadro33Color.rotation.y = 0.5;
    escenario.add(cuadro33Color);

    //2 linea
    var materialCuadro34Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro34Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro34Color);
    cuadro34Color.position.set(-14.8, -3.9, 1.7);
    cuadro34Color.rotation.y = 0.5;
    escenario.add(cuadro34Color);

    //3 linea
    var materialCuadro35Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro35Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro35Color);
    cuadro35Color.position.set(-14.8, -1.9, 1.7);
    cuadro35Color.rotation.y = 0.5;
    escenario.add(cuadro35Color);

    //4 linea

    var materialCuadro36Color = new THREE.MeshBasicMaterial({
      color: 0x8d93ff,
      side: THREE.DoubleSide,
    });
    cuadro36Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro36Color);
    cuadro36Color.position.set(-14.8, 0.1, 1.7);
    cuadro36Color.rotation.y = 0.5;
    escenario.add(cuadro36Color);
  }

  $("#lc2").click(function () {
    Cuadriculada2c();
  });

  function Cuadriculada1vv() {
    var geometriaCuadro = new THREE.Geometry();
    geometriaCuadro.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    var materialCuadro = new THREE.LineBasicMaterial({ color: 0x020bb1 });
    cuadro37 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro37.rotation.y = 0.5;
    cuadro37.position.set(-16.6, -5.9, 2.7);
    escenario.add(cuadro37);

    //Segunda linea
    cuadro38 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro38.rotation.y = 0.5;
    cuadro38.position.set(-16.6, -3.9, 2.7);
    escenario.add(cuadro38);

    //Tercera linea
    cuadro39 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro39.rotation.y = 0.5;
    cuadro39.position.set(-16.6, -1.9, 2.7);
    escenario.add(cuadro39);

    //Cuarta linea

    cuadro40 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro40.rotation.y = 0.5;
    cuadro40.position.set(-16.6, 0.1, 2.7);
    escenario.add(cuadro40);
  }
  $("#lc2").on("click", function () {
    Cuadriculada1vv();
  });

  function Cuadriculada2cv() {
    var geometriaCuadroColor = new THREE.Geometry();
    geometriaCuadroColor.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    geometriaCuadroColor.faces.push(
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(2, 3, 0)
    );

    var materialCuadro37Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro37Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro37Color);
    cuadro37Color.position.set(-16.6, -5.9, 2.7);
    cuadro37Color.rotation.y = 0.5;
    escenario.add(cuadro37Color);

    var materialCuadro38Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro38Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro38Color);
    cuadro38Color.position.set(-16.6, -3.9, 2.7);
    cuadro38Color.rotation.y = 0.5;
    escenario.add(cuadro38Color);

    var materialCuadro39Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro39Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro39Color);
    cuadro39Color.position.set(-16.6, -1.9, 2.7);
    cuadro39Color.rotation.y = 0.5;
    escenario.add(cuadro39Color);

    var materialCuadro40Color = new THREE.MeshBasicMaterial({
      color: 0x020bb1,
      side: THREE.DoubleSide,
    });
    cuadro40Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro40Color);
    cuadro40Color.position.set(-16.6, 0.1, 2.7);
    cuadro40Color.rotation.y = 0.5;
    escenario.add(cuadro40Color);
  }

  $("#lc2").click(function () {
    Cuadriculada2cv();
  });

  //Barras ROJA 1
  function barra() {
    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(-5, 0.5, -0.7);
    escenario.add(cylinder);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder2 = new THREE.Mesh(geometry, material);
    cylinder2.position.set(-3, 1, -0.7);
    escenario.add(cylinder2);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 7, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder3 = new THREE.Mesh(geometry, material);
    cylinder3.position.set(-1, 3.5, -0.7);
    escenario.add(cylinder3);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 6, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder4 = new THREE.Mesh(geometry, material);
    cylinder4.position.set(1, 3, -0.7);
    escenario.add(cylinder4);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder5 = new THREE.Mesh(geometry, material);
    cylinder5.position.set(3, 1.2, -0.7);
    escenario.add(cylinder5);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 4, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xfe020b });
    cylinder6 = new THREE.Mesh(geometry, material);
    cylinder6.position.set(5, 2, -0.7);
    escenario.add(cylinder6);
  }
  $("#b1").on("click", function () {
    barra();
  });

  //barras GRIS 2
  function barra2() {
    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder7 = new THREE.Mesh(geometry, material);
    cylinder7.position.set(6, 0.5, 0.7);
    escenario.add(cylinder7);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder8 = new THREE.Mesh(geometry, material);
    cylinder8.position.set(4, 1, 0.7);
    escenario.add(cylinder8);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 7, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder9 = new THREE.Mesh(geometry, material);
    cylinder9.position.set(2, 3.5, 0.7);
    escenario.add(cylinder9);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 6, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder10 = new THREE.Mesh(geometry, material);
    cylinder10.position.set(0, 3, 0.7);
    escenario.add(cylinder10);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder11 = new THREE.Mesh(geometry, material);
    cylinder11.position.set(-2, 1.5, 0.7);
    escenario.add(cylinder11);

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 4.5, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x5c5c3d });
    cylinder12 = new THREE.Mesh(geometry, material);
    cylinder12.position.set(-4, 2.2, 0.7);
    escenario.add(cylinder12);
  }
  $("#b2").on("click", function () {
    barra2();
  });

  //crear el titulo del grafico
  function titulo() {
    var geomteriaTitu = new THREE.TextGeometry("Grafico de columnas", {
      size: 2,
      height: 1,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 10,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialTitu = new THREE.MeshBasicMaterial({ color: 0xffffff });
    titu = new THREE.Mesh(geomteriaTitu, textMaterialTitu);
    titu.position.set(-14, 10, -2);
    escenario.add(titu);
  }
  $("#tg").on("click", function () {
    titulo();
  });

  // etiqueta lateral 1 negra nombre
  function leyenda() {
    var geomteriaLey = new THREE.TextGeometry("Etiqueta 1", {
      size: 2,
      height: 1,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 10,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialLey = new THREE.MeshBasicMaterial({ color: 0xffffff });
    legend = new THREE.Mesh(geomteriaLey, textMaterialLey);
    legend.position.set(16, 6.5, -2);
    escenario.add(legend);
  }
  $("#ly").on("click", function () {
    leyenda();
  });
  //Etiqueta lateral 2 roja nombre
  function etiquetacuadro1() {
    var geometriaCuadro = new THREE.Geometry();
    geometriaCuadro.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    var materialCuadro = new THREE.LineBasicMaterial({ color: 0x5c5c3d });
    cuadro41 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro41.position.set(7, 0.5, -2);
    escenario.add(cuadro41);
  }

  $("#ly").on("click", function () {
    etiquetacuadro1();
  });

  // Etiqueta lateral gris
  function cuadroE1C() {
    var geometriaCuadroColor = new THREE.Geometry();
    geometriaCuadroColor.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    geometriaCuadroColor.faces.push(
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(2, 3, 0)
    );

    var materialCuadro41Color = new THREE.MeshBasicMaterial({
      color: 0x5c5c3d,
      side: THREE.DoubleSide,
    });
    cuadro41Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro41Color);
    cuadro41Color.position.set(7, 0.5, -2);
    escenario.add(cuadro41Color);
  }

  $("#ly").click(function () {
    cuadroE1C();
  });

  ////etiqueta lateral roja
  function leyenda2() {
    var geomteriaLey2 = new THREE.TextGeometry("Etiqueta 2", {
      size: 2,
      height: 0.5,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 1,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialLey2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    legend2 = new THREE.Mesh(geomteriaLey2, textMaterialLey2);
    legend2.position.set(16, 3, -2);
    escenario.add(legend2);
  }
  $("#ly").on("click", function () {
    leyenda2();
  });

  function etiquetaCuadro2() {
    var geometriaCuadro = new THREE.Geometry();
    geometriaCuadro.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    var materialCuadro = new THREE.LineBasicMaterial({ color: 0xfe020b });
    cuadro42 = new THREE.Line(geometriaCuadro, materialCuadro);
    cuadro42.position.set(7, -3, -2);
    escenario.add(cuadro42);
  }

  $("#ly").on("click", function () {
    etiquetaCuadro2();
  });

  function cuadroE2C() {
    var geometriaCuadroColor = new THREE.Geometry();
    geometriaCuadroColor.vertices.push(
      new THREE.Vector3(8, 8, 0),
      new THREE.Vector3(8, 6, 0),
      new THREE.Vector3(6, 6, 0),
      new THREE.Vector3(6, 8, 0),
      new THREE.Vector3(8, 8, 0)
    );

    geometriaCuadroColor.faces.push(
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(2, 3, 0)
    );

    var materialCuadro42Color = new THREE.MeshBasicMaterial({
      color: 0xfe020b,
      side: THREE.DoubleSide,
    });
    cuadro42Color = new THREE.Mesh(geometriaCuadroColor, materialCuadro42Color);
    cuadro42Color.position.set(7, -3, -2);
    escenario.add(cuadro42Color);
  }

  $("#ly").click(function () {
    cuadroE2C();
  });
  //numero 1
  function vertical1() {
    var geomteriaVer1 = new THREE.TextGeometry("1", {
      size: 1.4,
      height: 0.5,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 1,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialVer1 = new THREE.MeshBasicMaterial({ color: 0x080800 });
    etiquetav = new THREE.Mesh(geomteriaVer1, textMaterialVer1);
    etiquetav.position.set(-10, 0, -0.9);
    escenario.add(etiquetav);
  }
  $("#ev").on("click", function () {
    vertical1();
  });
  //numero 2
  function vertical2() {
    var geomteriaVer2 = new THREE.TextGeometry("2", {
      size: 1.4,
      height: 0.5,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 1,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialVer2 = new THREE.MeshBasicMaterial({ color: 0x080800 });
    etiquetav2 = new THREE.Mesh(geomteriaVer2, textMaterialVer2);
    etiquetav2.position.set(-10, 2.3, -0.9);
    escenario.add(etiquetav2);
  }
  $("#ev").on("click", function () {
    vertical2();
  });
  //numero 3
  function vertical3() {
    var geomteriaVer3 = new THREE.TextGeometry("3", {
      size: 1.4,
      height: 0.5,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 1,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialVer3 = new THREE.MeshBasicMaterial({ color: 0x080800 });
    etiquetav3 = new THREE.Mesh(geomteriaVer3, textMaterialVer3);
    etiquetav3.position.set(-10, 4.3, -0.9);
    escenario.add(etiquetav3);
  }

  $("#ev").on("click", function () {
    vertical3();
  });
  //numero 4
  function vertical4() {
    var geomteriaVer4 = new THREE.TextGeometry("4", {
      size: 1.4,
      height: 0.5,
      curveSegments: 1,
      font: "helvetiker",
      weight: "normal",
      style: "normal",
      bevelThickness: 1,
      bevelSize: 4,
      bevelEnabled: false,
    });
    var textMaterialVer4 = new THREE.MeshBasicMaterial({ color: 0x000000 });
    etiquetav4 = new THREE.Mesh(geomteriaVer4, textMaterialVer4);
    etiquetav4.position.set(-10, 6.3, -0.9);
    escenario.add(etiquetav4);
  }
  $("#ev").on("click", function () {
    vertical4();
  });
  //limpiar escenario
  function limpiar() {
    escenario.remove(
      plano,
      tablero,
      cuadro1,
      cuadro2,
      cuadro3,
      cuadro4,
      cuadro5,
      cuadro6,
      cuadro7,
      cuadro8,
      cuadro9,
      cuadro10,
      cuadro11,
      cuadro12,
      cuadro13,
      cuadro14,
      cuadro15,
      cuadro16,
      cuadro17,
      cuadro18,
      cuadro19,
      cuadro20,
      cuadro21,
      cuadro22,
      cuadro23,
      cuadro24,
      cuadro25,
      cuadro26,
      cuadro27,
      cuadro28,
      cuadro29,
      cuadro30,
      cuadro31,
      cuadro32,
      cuadro33,
      cuadro34,
      cuadro35,
      cuadro36,
      cuadro37,
      cuadro38,
      cuadro39,
      cuadro40,
      cuadro1Color,
      cuadro2Color,
      cuadro3Color,
      cuadro4Color,
      cuadro5Color,
      cuadro6Color,
      cuadro7Color,
      cuadro8Color,
      cuadro9Color,
      cuadro10Color,
      cuadro11Color,
      cuadro12Color,
      cuadro13Color,
      cuadro14Color,
      cuadro15Color,
      cuadro16Color,
      cuadro17Color,
      cuadro18Color,
      cuadro19Color,
      cuadro20Color,
      cuadro21Color,
      cuadro22Color,
      cuadro23Color,
      cuadro24Color,
      cuadro25Color,
      cuadro26Color,
      cuadro27Color,
      cuadro28Color,
      cuadro29Color,
      cuadro30Color,
      cuadro31Color,
      cuadro32Color,
      cuadro33Color,
      cuadro34Color,
      cuadro35Color,
      cuadro36Color,
      cuadro37Color,
      cuadro38Color,
      cuadro39Color,
      cuadro40Color,
      cylinder,
      cylinder2,
      cylinder3,
      cylinder4,
      cylinder5,
      cylinder6,
      cylinder7,
      cylinder8,
      cylinder9,
      cylinder10,
      cylinder11,
      cylinder12,
      etiquetav,
      etiquetav2,
      etiquetav3,
      etiquetav4,
      titu,
      legend,
      legend2,
      cuadro41Color,
      cuadro41,
      cuadro42,
      cuadro42Color
    );
  }

  $("#limpiar").on("click", function () {
    limpiar();
  });
});


