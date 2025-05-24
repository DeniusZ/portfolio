import { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Draw something basic
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50, 150, 150);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(200, 50, 150, 150);

    const circles = [
      {
        r: 450,
        color: "#252525",
        baseX: width - 150,
        baseY: height - 50,
        x: width - 150,
        y: height - 150,
      },
      {
        r: 300,
        color: "#3e3e3e",
        baseX: width - 250,
        baseY: height - 100,
        x: width - 250,
        y: height - 100,
      },
      {
        r: 260,
        color: "#2e2e2e",
        baseX: width - 100,
        baseY: height - 250,
        x: width - 100,
        y: height - 250,
      },
    ];

    const mouse = { x: 0, y: 0 };

    const updateMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const circle of circles) {
        const dx = mouse.x - circle.x;
        const dy = mouse.y - circle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const threshold = 150;
        const maxShift = 20;

        if (dist < threshold) {
          const angle = Math.atan2(dy, dx);
          const shift = ((threshold - dist) / threshold) * maxShift;
          circle.x = circle.baseX - Math.cos(angle) * shift;
          circle.y = circle.baseY - Math.sin(angle) * shift;
        } else {
          circle.x += (circle.baseX - circle.x) * 0.05;
          circle.y += (circle.baseY - circle.y) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // const handleResize = () => {
    //   //   const size = setCanvasSize();
    //   //   width = size.width;
    //   //   height = size.height;

    //   // Reposition base circle coordinates
    //   circles[0].baseX = width - 150;
    //   circles[0].baseY = height - 150;
    //   circles[1].baseX = width - 250;
    //   circles[1].baseY = height - 100;
    //   circles[2].baseX = width - 100;
    //   circles[2].baseY = height - 250;
    // };

    window.addEventListener("mousemove", updateMouse);
    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      //   window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

export default CanvasBackground;
