import java.lang.reflect.Array;

public class For_Loops {
    public static void main(String[] args) {

        // For loop is a special type of loop in java that we can use to loop through difference blocks of code
        // It also allow us to use index in variable and this variable keeps tracks of how many times we've gone through the loop.

        // Making while loop a for loop
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
        }
        // For loop
        for (int x = 1; x <= 10; x++) {
            System.out.println(x);
        }
        // Lopping an Array
        String[] names = {"Samuel", "Davide", "John"};
        for (int y = 0; y < names.length; y++) {
            System.out.println(names[y]);
        }
    }
}