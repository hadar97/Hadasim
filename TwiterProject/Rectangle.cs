using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwiterProject
{
    class Rectangle:Shape
    {
        bool ISRectangle;
        public bool getISRectangle()
        {
            return this.ISRectangle;
        }
        public void setISRectangle(bool val)
        {
            this.ISRectangle = val;
        }


    }
}
