import java.util.*;
import java.util.stream.*;

class Product {
    String name;
    double price;

    Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

public class Program6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Product> products = new ArrayList<>();
        products.add(new Product("Laptop", 50000));
        products.add(new Product("Phone", 30000));
        products.add(new Product("Keyboard", 1500));
        products.add(new Product("Monitor", 6500));

        System.out.print("Enter minimum price: ");
        double minPrice = scanner.nextDouble();

        long count = products.stream()
                .filter(p -> p.price > minPrice)
                .count();

        System.out.println("Number of expensive products: " + count);
    }
}
