import java.util.Scanner;

public class Program3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[5];
        int sum = 0;

        System.out.println("Enter 5 numbers: ");

        for (int i = 0; i < 5; i++) {
            numbers[i] = scanner.nextInt();
            sum += numbers[i];
        }

        double avg = sum / 5.0;

        System.out.println("Sum = " + sum);
        System.out.println("Average ="  + avg);
    }
}