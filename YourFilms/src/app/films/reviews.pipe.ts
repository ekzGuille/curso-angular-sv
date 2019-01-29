import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reviews"
})
export class ReviewsPipe implements PipeTransform {
  transform(value: number, position: number): string {
    let image = "";
    if (value < position - 1 + 0.5) {
      image =
        "https://cdn4.iconfinder.com/data/icons/simplicio/128x128/star_empty.png";
    } else if (value >= position - 1 + 0.5 && value < position) {
      image =
        "https://cdn4.iconfinder.com/data/icons/simplicio/128x128/star_half.png";
    } else {
      image =
        "https://cdn4.iconfinder.com/data/icons/simplicio/128x128/star_full.png";
    }
    return image;
  }
}
