import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {NgIf, UpperCasePipe} from '@angular/common';
import {AgePipe} from '../age.pipe';
import {ExperiencePipe} from '../experience.pipe';
import {RatingPipe} from '../pipes/ratings.pipe';
import {HoverDirectiveDirective} from '../directives/hover-directive.directive';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.scss'],
  imports: [
    NgIf,
    RouterLink,
    AgePipe,
    ExperiencePipe,
    UpperCasePipe,
    RatingPipe,
    HoverDirectiveDirective
  ],
  standalone: true
})
export class SitterDetailComponent implements OnInit {
  sitter: PetSitter | undefined;

  constructor(
    private route: ActivatedRoute,
    private sitterService: SitterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sitterService.getSitterById(id).subscribe((data) => {
      this.sitter = data;
    });
  }
}
