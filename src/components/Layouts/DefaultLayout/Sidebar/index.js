import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import routesConfig from '~/config/route';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons/icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('nav-inner')}>
                <>
                    <Link to={routesConfig.home} className={cx('link-icon')}>
                        <HomeIcon />
                        <span className={cx('link-text')}>Dành cho bạn</span>
                    </Link>
                    <Link to={routesConfig.home} className={cx('link-icon')}>
                        <UserGroupIcon />
                        <span className={cx('link-text')}>Đang Follow</span>
                    </Link>
                    <Link to={routesConfig.home} className={cx('link-icon')}>
                        <LiveIcon />
                        <span className={cx('link-text')}>LIVE</span>
                    </Link>
                </>
            </div>
            <div className={cx('nav-inner')}></div>
        </aside>
    );
}

export default Sidebar;
