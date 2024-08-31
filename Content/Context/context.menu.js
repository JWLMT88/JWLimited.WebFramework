document.addEventListener('DOMContentLoaded', () => {
    const contextMenu = document.getElementById('context-menu');
    let currentTarget = null;

    document.addEventListener('contextmenu', (e) => {
        const target = e.target.closest('[data-context]');
        if (target) {
            currentTarget = target;x
            e.preventDefault();
            showContextMenu(e.pageX, e.pageY, target.dataset.context, target.dataset.name, target.dataset.projectid);
        }
    });

    document.addEventListener('click', () => {
        contextMenu.classList.add('hidden');
    });

    function showContextMenu(x, y, context, name) {
        const menuItems = getMenuItems(context, name);
        contextMenu.innerHTML = menuItems;
        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        contextMenu.classList.remove('hidden');
    }

    function getMenuItems(context, name, id) {
        const commonItems = `
            <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('rename', '${context}', '${name}', '${id}')">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Rename
            </button>
            <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('delete', '${context}', '${name}', '${id}')">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                Delete
            </button>
        `;

        switch (context) {
            case 'website':
                return `
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('visit', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Open Configs
                    </button>
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('edit', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Edit in Cloud Editor
                    </button>
                    ${commonItems}
                `;
            case 'app':
                return `
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('start', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Start App
                    </button>
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('stop', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg>
                        Stop App
                    </button>
                    ${commonItems}
                `;
            case 'file':
                return `
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('download', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download
                    </button>
                    <button class="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center" onclick="handleAction('share', '${context}', '${name}', '${id}')">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    ${commonItems}
                `;
            default:
                return commonItems;
        }
    }

    window.handleAction = (action, context, name, id) => {
        console.log(`Action: ${action}, Context: ${context}, Name: ${name}`);
        contextMenu.classList.add('hidden');
    };
});