using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwiterProject
{
   abstract class Shape 
    {
       protected double height;
        protected double width;
        public Shape()
        {

        }
        public double Hightget()
        {
            return this.height;
        }
        public double Widthget()
        {
            return this.width;
        }
        public void HeightSet(double val)
        {
            this.height = val;
        }

        public void WidthSet(double val)
        {
            this.width = val;
        }

    }
}
