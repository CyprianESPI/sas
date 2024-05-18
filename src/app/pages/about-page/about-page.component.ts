import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="banner">
      <h1>About Smol Angular Snippets</h1>
    </div>
    <div class="content">
      <section id="mission">
        <h2>Mission Statement</h2>
        <p>
          Smol Angular Snippets is a personal project dedicated to experimenting
          with Angular and showcasing various code snippets. The goal is to
          provide simple, reusable components that demonstrate the power and
          flexibility of Angular, all without relying on any UI frameworks.
        </p>
      </section>
      <section id="story">
        <h2>The Story</h2>
        <p>
          Smol Angular Snippets began as a sandbox for exploring Angular's
          capabilities and sharing the resulting code with the developer
          community. As new challenges and ideas emerged, the project evolved
          into a collection of practical, bite-sized snippets designed to make
          Angular development more accessible and enjoyable.
        </p>
      </section>
      <section id="team">
        <h2>The Creator</h2>
        <div class="team-member">
          <div>
            <img src="assets/avatar.jpg" alt="photo of Cyprian ESPINOZA" />
            <div>
              <h3>Cyprian ESPINOZA</h3>
              <p>Creator & Developer</p>
            </div>
          </div>
          <p>
            With a passion for coding and a love for Angular, I created Smol
            Angular Snippets to experiment with new ideas and share my findings
            with others. This project is a reflection of my journey through the
            Angular ecosystem.
          </p>
        </div>
      </section>
      <section id="vision">
        <h2>Vision</h2>
        <p>
          Looking ahead, Smol Angular Snippets aims to continuously expand its
          library of components, offering more complex and varied examples. The
          vision is to build a resource that inspires and aids developers in
          their Angular projects, fostering a community of sharing and learning.
        </p>
      </section>
      <section id="testimonials" style="display: none;">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "Smol Angular Snippets has been a fantastic resource for learning
            Angular. The straightforward examples have helped me understand key
            concepts and improve my own projects." — Developer Name
          </p>
        </blockquote>
      </section>
      <section id="github">
        <h2>GitHub</h2>
        <p>
          Explore the code, contribute your own snippets, or report issues on
          our
          <a
            href="https://github.com/CyprianESPI/sas"
            target="_blank"
            class="github-link"
            ><i class="fab fa-github"></i> GitHub repository</a
          >.
        </p>
      </section>
    </div>
    <div class="footer">
      <p>&copy; 2024 Smol Angular Snippets. All rights reserved.</p>
    </div>`,
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
