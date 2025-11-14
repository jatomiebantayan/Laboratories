import java.util.Scanner;

void main() {
    Scanner scan = new Scanner(System.in);

    IO.print("Enter your name: ");
    String name = scan.nextLine();

    IO.print("Enter your age: ");  
    int age = scan.nextInt();

    IO.println("Hello, " + name + "! You're " + age + "years old.");
}
