import * as THREE from 'three';
import {useEffect} from 'react'
import './cap.css';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import cap_model from '../../assets/scene.gltf';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export default function Cap({width,height}) {
    // console.log(props)
    useEffect(() => {
      load3d(document.querySelector('#cap'))
        console.log(document.getElementById('cap'))
    
      return () => {
        // second
      }
    }, [])
    
    const load3d = (element) => {
        element.innerHTML = "";
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, element.getBoundingClientRect().width / element.getBoundingClientRect().height, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        const lightSource = new THREE.AmbientLight(0xffffff,0.1)
        scene.add(lightSource);
        renderer.setClearAlpha(0)
        renderer.setSize( element.getBoundingClientRect().width,element.getBoundingClientRect().height);
        element.appendChild( renderer.domElement );

        const loader = new GLTFLoader();
        const light = new THREE.DirectionalLight(0xffffff,12);
        const lightHelper = new THREE.PointLightHelper(lightSource,undefined,0x00ff00);
        scene.add(new THREE.GridHelper(1,10))
        
        // scene.add(light)
        scene.add(lightHelper)
        const controls = new OrbitControls(camera,renderer.domElement);

        loader.load("./scene.gltf",(obj)=> {
            window.obj = obj.scene;
            scene.add(obj.scene);
            // obj.scale.set(2,2,2)
            // controls.update()
            animate();
        })

        // // CUBE 
        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );

        // camera.position.z = 5;
        camera.position.x = -0.008;
        camera.position.y = 0.236;
        camera.position.z = 0.08;  
        function animate() {
            requestAnimationFrame( animate );
            if(window.obj != null && window.obj != undefined) {
                // window.obj.rotation.x += 0.01;
                // window.obj.rotation.y += 0.01;
            }
            // console.log(camera.position)
            // controls.update();
            renderer.render( scene, camera );
        }

    }

    // load3d();
    return <div id="cap" style={{width:width,height:height}}>
        
    </div>
}