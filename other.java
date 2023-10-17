import javax.swing.JFrame;
import javax.swing.JLabel;

public class other {
    other(String name){
        JFrame frame = new JFrame();
       JLabel label = new JLabel(name, null, 0);

       frame.setVisible(true);
       frame.setSize(400, 400);
       frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

       frame.add(label);
    }
}
