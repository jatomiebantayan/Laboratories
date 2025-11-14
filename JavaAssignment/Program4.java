import java.util.Scanner;

public class Program4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String text = scanner.nextLine();

        String reversed = new StringBuilder(text).reverse().toString();

        if (text.equalsIgnoreCase(reversed)) {
            System.out.println("It is a palindrome.");
        } else {
            System.out.println("It is NOT a palindrome.");
        }
    }
}

