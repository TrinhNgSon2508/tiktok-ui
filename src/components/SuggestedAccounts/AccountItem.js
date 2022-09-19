// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a0e0ad4034044cf9aaad21e46e2eb357~c5_100x100.jpeg?x-expires=1663574400&x-signature=TENhUGXVnveeFOVfwiIO%2BNqoWq0%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>linh.owii</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>tlin ơi</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
// AccountItem.prototype = {};
export default AccountItem;
