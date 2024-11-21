import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-D280';

  handleMouseOver(event:MouseEvent): void {
    //on mouseover I want to grab the id from the svg path thats being hovered over 
    const target = event.target as SVGElement; // tells computer to treat the target of the mouse event like an svg element
    
  }
}
