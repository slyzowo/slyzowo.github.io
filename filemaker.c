#include <stdio.h>
int main(){

  FILE *pF = fopen("template.html", "w");

  fprintf(pF, "");


fprintf(pF, "<!DOCTYPE html> \n");
fprintf(pF, "<html lang=\"en\"> \n");
fprintf(pF, "<head> \n");
fprintf(pF, "<!--basic stuffs --> \n");
fprintf(pF, "  <title>slyzoo.net</title> \n");
fprintf(pF, "  <link rel=\"stylesheet\" href=\"/styles/style.css\"> \n");
fprintf(pF, "  <link rel=\"icon\" type=\"image\" href=\"Images/home.svg\"> \n");
fprintf(pF, "<!-- not sure? --> \n");
fprintf(pF, "  <meta charset=\"UTF-8\"> \n");
fprintf(pF, "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n");
fprintf(pF, "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n");
fprintf(pF, "  <meta name=\"color-scheme\" content=\"light dark\"> \n");
fprintf(pF, "<!-- embed support --> \n");
fprintf(pF, "  <meta property=\"og:title\" content=\"slyzoo.net\"> \n");
fprintf(pF, "  <meta property=\"og:site_name\" content=\"Discord\"> \n");
fprintf(pF, "  <meta property=\"og:image\" content=\"https://slyzoo.net/Images/home.svg\"> <!-- need to change image --> \n");
fprintf(pF, "  <meta property=\"og:description\" content=\"Homepage of slyzoo.net where you can explore recent changes, and future goals!\"> \n");
fprintf(pF, "</head> \n");
fprintf(pF, "<body> \n");
fprintf(pF, "  <nav class=\"nav\"> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net\"><img src=\"/Images/home.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/multi-calculator\"><img src=\"/Images/calculator.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/multi-cipher\"><img src=\"/Images/cipher.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/fabric-mods\"><img src=\"/Images/fabric.png\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/neodroid\"><img src=\"/Images/neodroid.png\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/neomoji\"><img src=\"/Images/neomoji/red_circle.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/programming\"><img src=\"/Images/terminal.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/project-magenta\"><img src=\"/Images/keyboard.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "    <a href=\"https://slyzoo.net/stopwatch\"><img src=\"/Images/stopwatch.svg\" height=\"50\" width=\"50\"></a> \n");
fprintf(pF, "  </nav> \n");
fprintf(pF, " \n");
fprintf(pF, "<div class=\"main\"> \n");
fprintf(pF, "</div> \n");
fprintf(pF, "</body> \n");
fprintf(pF, "</html> \n");

  fclose(pF);

return 0;
}