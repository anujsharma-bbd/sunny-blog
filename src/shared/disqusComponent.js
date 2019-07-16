import React from 'react';

export class DisqusCommentsComponent extends React.Component {

   constructor(props) {
      super(props);
      this.addScript = this.addScript.bind(this);
   }

   componentDidMount() {
      window.disqus_config = function () {
         const pageId = window.location.href;
         this.page.url = pageId;
         this.page.identifier =
            document.location.href.substr(
               document.location.href.indexOf(this.page.url) + this.page.url.length
            );
      };
      this.addScript();
   }
   addScript() {
      try {
         const { disqusId } = this.props;
         const scriptId = 'disqus_script';
         let scriptTag = document.getElementById(scriptId);
         if (scriptTag) {
            scriptTag.remove();
         }
         var d = document, s = d.createElement('script');
         s.id = scriptId;
         s.async = true;
         s.src = `http://${disqusId}.disqus.com/embed.js`;
         s.setAttribute('data-timestamp', +new Date());
         (d.head || d.body).appendChild(s);
      }
      catch (e) { console.log(e); }
   }
   render() {
      return (
         <div id="disqus_thread"></div>
      );
   }
}

export default DisqusCommentsComponent;