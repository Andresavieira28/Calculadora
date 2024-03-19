import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char operator;
        double num1, num2, result;
        boolean exit = false;
        
        while (!exit) {
            System.out.print("Digite o primeiro número: ");
            num1 = scanner.nextDouble();
            System.out.print("Digite a operação (+, -, *, /) ou 's' para sair: ");
            operator = scanner.next().charAt(0);
            
            if (operator == 's') {
                exit = true;
                continue;
            }
            
            System.out.print("Digite o segundo número: ");
            num2 = scanner.nextDouble();
            
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        System.out.println("Erro: Divisão por zero!");
                        continue;
                    }
                    break;
                default:
                    System.out.println("Operação inválida!");
                    continue;
            }
            
            System.out.println("Resultado: " + result);
        }
        
        scanner.close();
        System.out.println("Obrigado por usar a calculadora!");
    }
}
