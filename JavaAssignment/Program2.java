import java.util.Scanner;

public class Program2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of terms: ");
        int n = scanner.nextInt();

        int a = 0, b = 1;

        System.out.print("Fibonacci Series: ");

        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}