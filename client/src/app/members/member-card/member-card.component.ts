import { RouterLink } from '@angular/router';
import { Member } from './../../_models/member';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
})
export class MemberCardComponent {
  member = input.required<Member>();

}
