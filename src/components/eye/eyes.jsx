/* eslint-disable react/no-string-refs */
import React from 'react';

class Eyes extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.eye1X = this.canvas.width / 11;
    this.eye1Y = this.canvas.height / 5;
    this.eye2X = this.canvas.width / 7;
    this.eye2Y = this.canvas.height / 5;

    this.eyeRadius = 35;

    window.addEventListener('mousemove', this.handleMouseMove);

    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    this.mouseX = mouseX;
    this.mouseY = mouseY;
  };

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const dx1 = this.mouseX - this.eye1X;
    const dy1 = this.mouseY - this.eye1Y;
    const angle1 = Math.atan2(dy1, dx1);

    const dx2 = this.mouseX - this.eye2X;
    const dy2 = this.mouseY - this.eye2Y;
    const angle2 = Math.atan2(dy2, dx2);

    this.drawEye(this.eye1X, this.eye1Y, angle1);
    this.drawEye(this.eye2X, this.eye2Y, angle2);

    requestAnimationFrame(() => this.animate());
  }

  drawEye(x, y, angle) {
    const iris_x = x + (Math.cos(angle) * this.eyeRadius) / 10;
    const iris_y = y + (Math.sin(angle) * this.eyeRadius) / 10;
    const irisRadius = this.eyeRadius / 1.2;

    const pupilRadius = this.eyeRadius / 2.5;
    const pupil_x = x + (Math.cos(angle) * this.eyeRadius) / 1.9;
    const pupil_y = y + (Math.sin(angle) * this.eyeRadius) / 1.9;

    const reflectionRadius = pupilRadius / 2;
    const reflection_x = pupil_x - pupilRadius / 3;
    const reflection_y = pupil_y - pupilRadius / 3;

    this.ctx.beginPath();
    this.ctx.arc(x, y, this.eyeRadius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = 'rgb(50, 64, 77)';
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(iris_x, iris_y, irisRadius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(pupil_x, pupil_y, pupilRadius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      reflection_x,
      reflection_y,
      reflectionRadius,
      0,
      Math.PI * 2,
      true
    );
    this.ctx.fillStyle = 'rgb(255,255,255)';
    this.ctx.fill();
    this.ctx.closePath();
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        onMouseEnter={() => (this.canvas.style.pointerEvents = 'auto')}
        onMouseLeave={() => (this.canvas.style.pointerEvents = 'none')}
      />
    );
  }
}

export default Eyes;
