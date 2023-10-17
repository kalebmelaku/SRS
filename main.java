import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;
class UI implements ActionListener{
    JFrame frame = new JFrame();
    JButton btn1  = new JButton("btn 1");
    JButton btn2  = new JButton("btn 2");
    JButton btn3  = new JButton("btn 3");
    JButton btn4  = new JButton("btn 4");
    JButton btn5  = new JButton("btn 5");
    JButton btn6  = new JButton("btn 5");
    JButton btn7  = new JButton("btn 5");
    JButton btn8  = new JButton("btn 5");
    JButton btn9  = new JButton("btn 5");
    UI(){
        
        frame.add(btn1);
        frame.add(btn2);
        frame.add(btn3);
        frame.add(btn4);
        frame.add(btn5);
        frame.add(btn6);

        btn1.addActionListener((ActionListener) this);

        frame.setLayout(new GridLayout(2, 3, 10, 10));
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == btn1){
            frame.dispose();
            new other("kaleb");
        }
    }
}
class Main{
    public static void main(String[] args){
        new UI();
    }
}