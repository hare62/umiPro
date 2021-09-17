import BasicLayout from './BasicLayout'

function Layout(props) {
  return (
    <BasicLayout>
        {props.children}
    </BasicLayout>
  );
}

export default Layout;
