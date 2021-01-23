import React, { FC } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";

const NavigationGrid: FC = () => {
  const ResponsiveReactGridLayout = WidthProvider(GridLayout.Responsive);

  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 0, y: 1, w: 2, h: 2 },
    { i: "4", x: 2, y: 0, w: 2, h: 2 },
    { i: "5", x: 2, y: 1, w: 1, h: 1 },
    { i: "6", x: 3, y: 1, w: 1, h: 1 },
  ];

  const gridItems = [
    {
      id: '1',
      text: "Layout 1",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    },
    {
      id: '2',
      text: "Layout 2",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    },
    {
      id: '3',
      text: "Layout 3",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    },
    {
      id: '4',
      text: "Layout 4",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    },
    {
      id: '5',
      text: "Layout 5",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    },
    {
      id: '6',
      text: "Layout 6",
      imageSrc:
        "https://www.lieben.no/wp-content/uploads/2018/03/famespegard-13.jpg",
    }
  ];

  return (
    <ResponsiveReactGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
      measureBeforeMount={true}
      className="layout"
      rowHeight={200}
      // isDragable={true}
      isResizable={true}
      // onDrag={this.onDragging}
      // onDragStop={this.onMoveCard}
      // onResizeStop={this.onResizeCard}
      // margin={[20, 20]}
      >
      {gridItems.map((item, index) => (
        <div key={item.id} className="grid-item">
          <img
            src={item.imageSrc}
            alt={item.text}
            className="w-full h-full object-cover"
          />
          {/* {item.text} */}
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default NavigationGrid;
