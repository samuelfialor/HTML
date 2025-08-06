public class NestedLoop_2DArrays {
    public static void main(String[] args) {

        for(int i = 1; i < 3; i++) {
            for (int j = 1; j < 4; j++) {
                System.out.println("i= " + i + ", j= " + j);
            }
        }

        // 2D Arrays
        int [][] numberGrid = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9},
                {0}
        };
        System.out.println(numberGrid[0][0]);
        System.out.println(numberGrid[1][2]);

        for(int i = 0; i < numberGrid.length; i++) {
            for (int j = 0; j < numberGrid[i].length; j++) {
                System.out.print(numberGrid[i][j]);
            }
            System.out.println();
        }
    }
}
