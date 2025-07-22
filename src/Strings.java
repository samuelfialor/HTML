import java.util.Locale;

public class Strings {
    public static void main(String[] args) {
String phrase = "SamTech Academy";

        System.out.println(phrase);
        System.out.println(phrase.toUpperCase(Locale.ROOT));
        System.out.println(phrase.toLowerCase());
        System.out.println(phrase.length());
        System.out.println(phrase.charAt(8));
        System.out.println(phrase.indexOf("T"));
        System.out.println(phrase.substring(3));
        System.out.println(phrase.substring(0,8));
        System.out.println(phrase.contains("SamTech"));
        System.out.println(phrase.contains("Dog"));
    }
}
