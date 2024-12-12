import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'ratings'
})
export class RatingPipe implements PipeTransform {
  transform(rating: number): string {
    // Ensure rating is within 0 to 5
    const fullStars = Math.floor(rating);  // full stars (whole number)
    const hasHalfStar = rating % 1 >= 0.5; // check if there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // remaining empty stars

    // Construct the star string based on full, half, and empty stars
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
  }
}
