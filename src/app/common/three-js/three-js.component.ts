import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-js',
  standalone: true,
  imports: [CommonModule],
  template: ` <div #container></div>`,
  styleUrl: './three-js.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeJsComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  width = 300;
  height = 300;
  camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 10);
  scene = new THREE.Scene();
  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(this.geometry, this.material);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  animateCallback: any;

  constructor(private _renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.camera.position.z = 1;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.renderer.setSize(this.width, this.height);
    // /!\ this this is not that this /!\
    this.animateCallback = {
      callAnimate: this.animate.bind(this),
    };
    this.animateCallback.callAnimate();
    this.renderer.setAnimationLoop(this.animateCallback);
    // Somehow can't access class from scss file, so it's set here
    this.renderer.domElement.style.margin = 'auto';

    // append to DOM
    this._renderer2.appendChild(
      this.container.nativeElement,
      this.renderer.domElement
    );

    console.debug(this);
  }

  animate(time: any) {
    // /!\ this this is not that this /!\
    requestAnimationFrame(this.animateCallback.callAnimate);
    this.mesh.rotation.x = time / 2000;
    this.mesh.rotation.y = time / 1000;

    this.renderer.render(this.scene, this.camera);
  }
}
