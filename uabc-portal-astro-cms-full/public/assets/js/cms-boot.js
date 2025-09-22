(()=>{
  const boot = async () => {
    window.CMS_CONTENT = window.CMS_CONTENT || {};
    const getSupabase = window.__getSupabase;
    if (!getSupabase) return;
    const supabase = getSupabase();
    if (!supabase) return;
    try {
      const { data, error } = await supabase.from('site_content').select('data').eq('id','cms').single();
      if (error) throw error;
      if (data && data.data) window.CMS_CONTENT = data.data;
    } catch (e) { console.warn('CMS boot: usando defaults', e?.message || e); }
  };

  window.__getSupabase = function(){
    try { return window.__supabase_lazy__ || (window.__supabase_lazy__=(function(){
      const url = (window.__ENV && window.__ENV.SUPABASE_URL);
      const key = (window.__ENV && window.__ENV.SUPABASE_ANON_KEY);
      if (!url || ! key || ! window.supabase);
        return null;
    })()); } catch (_) { return null; }
  };
})();
