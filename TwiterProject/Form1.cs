using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TwiterProject
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            
        }

        public void VisableDATA()
        {
            textBox1.Visible = true;
            textBox2.Visible = true;
            label1.Visible = true;
            label2.Visible = true;
            button4.Visible= true;
        }
        private void button1_Click(object sender, EventArgs e)
        {
            VisableDATA();

        }

        private void button4_Click(object sender, EventArgs e)
        {
            Rectangle rectangle = new Rectangle();
            double height = Convert.ToInt32(textBox1.Text);
            double width = Convert.ToInt32(textBox2.Text);
            rectangle.HeightSet(height);
            rectangle.WidthSet(width);
            label3.Visible = true;
            if (Math.Abs(height - width) > 5)
            {
                label3.Text = "שטח: ";
                label3.Text += (height * width).ToString();
            }
            else
            {
                label3.Text = "היקף: ";
                double Scope = height * 2 + width * 2;
                label3.Text += Scope.ToString();
            }
        }
        public void VisableDATAForTringale()
        {
            textBox1.Visible = true;
            textBox2.Visible = true;
            label1.Visible = true;
            label2.Visible = true;
            button5.Visible = true;
            button6.Visible = true;

        }
        private void button2_Click(object sender, EventArgs e)
        {
            VisableDATAForTringale();
            button4.Visible = false;
            textBox1.Text = "";
            textBox2.Text = "";
            label3.Visible = false;

        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == "" || textBox2.Text == "")
            {
                MessageBox.Show("חסרים נתונים!");
            }
            double height = Convert.ToInt32(textBox1.Text);
            double width = Convert.ToInt32(textBox2.Text);
            double temp = width / 2;
            double pitagoras = Math.Pow(temp, 2) + Math.Pow(height, 2);
            double Scope =  Math.Sqrt(pitagoras) * 2 + width;
            label4.Visible = true;
            label4.Text = "היקף: ";
            label4.Text += Scope.ToString();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            try
            {
                if (textBox1.Text == "" || textBox2.Text == "")
            {
                MessageBox.Show("חסרים נתונים!");
            }
            string printTringake = "";
            double height = Convert.ToInt32(textBox1.Text);
            double width = Convert.ToInt32(textBox2.Text);
            int spaces = Convert.ToInt32(width / 2);
            Tringale tringale = new Tringale(height, width);
            if (tringale.Widthget() % 2 == 0|| tringale.Widthget()>=tringale.Hightget() * 2)
            {
                MessageBox.Show("אין אפשרות להדפיס את המשלוש");
            }
            else if (tringale.Widthget() % 2 != 0 && (tringale.Hightget() * 2) > tringale.Widthget())
            { int num = 0;
               
               
                for (int i = 0; i < spaces; i++)
                {
                    printTringake += " ";
                }
                spaces -= 1;
                printTringake += "*";
                int count = Convert.ToInt32(tringale.Hightget() - 2);
                double temp = tringale.Widthget();
                int ezugicount = 0;
                Stack<double> s = new Stack<double>();
                while (temp>0)
                {if (temp % 2 != 0)
                    {
                        ezugicount++;
                        s.Push(temp);
                    }
                   temp= temp - 1;
                }
                s.Pop();
          
                if ((Convert.ToInt32(tringale.Hightget()) - 2 % ezugicount - 2) != 0)
                {
                   
                        int Rest = count / (ezugicount - 2);
                        int first = Convert.ToInt32(tringale.Hightget() - 2) - (Rest * Convert.ToInt32((ezugicount - 3)));

                        num = Convert.ToInt32(s.Pop());

                        for (int i = 0; i < first; i++)
                        {
                            printTringake += "\n";
                            for (int k = 0; k < spaces; k++)
                            {
                                printTringake += " ";
                            }

                            for (int j = 0; j < num; j++)
                            {
                                printTringake += "*";
                            }

                        }
                        spaces -= 1;

                        while (s.Count > 1)
                        { num = Convert.ToInt32(s.Pop());
                            for (int i = 0; i < Rest; i++)
                            {
                                printTringake += "\n";
                                for (int k = 0; k < spaces; k++)
                                {
                                    printTringake += " ";
                                }

                                for (int j = 0; j < num; j++)
                                {
                                    printTringake += "*";
                                }

                            }
                            spaces -= 1;
                        }

                    }

                else
                    {
                        while (s.Count > 1)
                        {
                            num = Convert.ToInt32(s.Pop());
                            for (int i = 0; i < count / (ezugicount - 2); i++)
                            {
                                printTringake += "\n";
                                for (int k = 0; k < spaces; k++)
                                {
                                    printTringake += " ";
                                }

                                for (int j = 0; j < num; j++)
                                {
                                    printTringake += "*";

                                }

                            }
                        }
                        spaces -= 1;
                    } 
               
               
                printTringake += "\n";
                for (int i = 0; i < tringale.Widthget(); i++)
                {
                    printTringake += "*";
                }
            }
            label5.Visible = true;
            label5.Text = printTringake;
        }
       catch (Exception ex)
            {
                MessageBox.Show("המספרים שהוכנסו אינם מספיקים לציור משולש");
                label5.Text = "";
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
