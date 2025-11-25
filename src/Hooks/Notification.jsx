// components/Notification/Notification.js
import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

const Notification = ({ notification, onClose }) => {
    if (!notification.show) return null;

    const getNotificationStyles = (type) => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-green-50 border-green-200',
                    text: 'text-green-800',
                    icon: <FaCheckCircle className="text-green-500" />
                };
            case 'error':
                return {
                    bg: 'bg-red-50 border-red-200',
                    text: 'text-red-800',
                    icon: <FaExclamationCircle className="text-red-500" />
                };
            case 'info':
                return {
                    bg: 'bg-blue-50 border-blue-200',
                    text: 'text-blue-800',
                    icon: <FaInfoCircle className="text-blue-500" />
                };
            default:
                return {
                    bg: 'bg-gray-50 border-gray-200',
                    text: 'text-gray-800',
                    icon: <FaInfoCircle className="text-gray-500" />
                };
        }
    };

    const styles = getNotificationStyles(notification.type);

    return (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full animate-fade-in">
            <div className={`flex items-center justify-between p-4 rounded-lg border shadow-lg ${styles.bg} ${styles.text}`}>
                <div className="flex items-center space-x-3">
                    <div className="text-lg">
                        {styles.icon}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 hover:opacity-70 transition-opacity"
                >
                    <FaTimes className="text-current" />
                </button>
            </div>
        </div>
    );
};

export default Notification;